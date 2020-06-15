import { ajax } from 'rxjs/ajax';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AccountService } from './account.service';


const _API_BASE = 'https://publish.coding.blog';
const _STATUS_URL= '/status';
const _JOB_URL = '/job';

const _CHECK_NEW_JOB_INTERVAL = 13000;
const _CHECK_ACTIVE_JOB_STATUS_INTERVAL = 2000;


export type JobStatusType = 'completed' | 'failed' | 'running' | 'retrying';
export type JobStageType = 
  'git-clone' | 'copy-own-build-files' | 'install-codedoc' | 'build-codedoc' | 'upload-to-s3' | 'callback-url';


export interface PublishError {
  error: {
    cmd: string;
    code: number;
    stack: string;
  }
  stage: JobStageType;
}


export type PublishErrors = {[_try: number]: PublishError};


export interface PublishJob {
  id: string;
  status: JobStatusType;
  created: Date;
  tries?: number;
  errors?: PublishErrors;
}

interface StatusResponse {
  data: {
    last_job_id: string;
  }
}

interface JobResponse {
  data: {
    build_status: JobStatusType;
    created_at: {
      _seconds: number;
    },
    errors?: PublishErrors;
    tries?: number;
  }
}


export class PublishService {
  static __instance: PublishService;

  static instance() {
    if (!this.__instance) this.__instance = new PublishService();
    return this.__instance;
  }


  account: AccountService;
  readonly lastJob = new BehaviorSubject<PublishJob | undefined>(undefined);
  private lastJobUpdateSchedule: any;

  constructor() {
    this.account = AccountService.instance();
    this.updateLastJob();
    this.account.data.subscribe(() => this.updateLastJob());
  }

  publishToken() {
    return this.account.data.value?.publishUrl?.substr(35);
  }

  async updateLastJob() {
    const token = this.publishToken();
    const _prevjob = this.lastJob.value;
    if (token) {
      if (!_prevjob || _prevjob.status === 'completed' || _prevjob.status === 'failed') {
        const jobId = await this.getLastJobId(token);
        if (jobId && (!_prevjob || _prevjob.id !== jobId)) {
          const job = await this.getJob(token, jobId);
          if (job) {
            this.lastJob.next({ 
              id: jobId, 
              status: job.status, 
              created: job.created,
              errors: job.errors,
              tries: job.tries,
            });
            if (job.status === 'running' || job.status === 'retrying')
              this.scheduleLastJobUpdate(_CHECK_ACTIVE_JOB_STATUS_INTERVAL);
            else this.scheduleLastJobUpdate(_CHECK_NEW_JOB_INTERVAL);
          } else this.scheduleLastJobUpdate(_CHECK_NEW_JOB_INTERVAL);
        }
      } else {
        const job = await this.getJob(token, _prevjob.id);
        if (job && job.status !== _prevjob.status) {
          this.lastJob.next({
            id: _prevjob.id,
            status: job.status,
            created: job.created,
            errors: job.errors,
            tries: job.tries,
          });
          if (job.status === 'running' || job.status === 'retrying')
            this.scheduleLastJobUpdate(_CHECK_ACTIVE_JOB_STATUS_INTERVAL);
          else this.scheduleLastJobUpdate(_CHECK_NEW_JOB_INTERVAL);
        } else {
          this.scheduleLastJobUpdate(_CHECK_ACTIVE_JOB_STATUS_INTERVAL);
        }
      }
    }
  }

  scheduleLastJobUpdate(millis: number) {
    clearTimeout(this.lastJobUpdateSchedule);
    this.lastJobUpdateSchedule = setTimeout(() => this.updateLastJob(), millis);
  }

  async getLastJobId(token: string) { 
    try {
      const res = await ajax.getJSON<StatusResponse>(_API_BASE + _STATUS_URL + `?token=${token}`).toPromise();
      return res?.data.last_job_id;
    } catch {}
  }

  async getJob(token: string, id: string) { 
    try {
      const res = await ajax.getJSON<JobResponse>(_API_BASE + _JOB_URL + `?token=${token}&job_id=${id}`).toPromise();
      if (res?.data) {
        return {
          status: res.data.build_status,
          created: new Date(res.data.created_at._seconds * 1000),
          tries: res.data.tries,
          errors: res.data.errors,
        }
      }
    } catch {}
  }

  _canPublish() {
    return this.lastJob.value?.status !== 'running' && this.lastJob.value?.status !== 'retrying';
  }

  canPublish() {
    return this.lastJob.pipe(map(() => this._canPublish()));
  }

  async publishBlog() {
    if (this.account.data.value?.publishUrl && this._canPublish()) {
      const url = this.account.data.value?.publishUrl;
      await new Promise((resolve, reject) => {
        ajax.post(url).subscribe(() => {
          this.scheduleLastJobUpdate(50);
          resolve();
        }, err => reject(err));
      });
    }
  }
}
