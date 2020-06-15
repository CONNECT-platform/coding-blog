import { interval, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { truthy, not } from 'rxmetics';
import { RendererLike, Conditional } from '@connectv/html';
import { transport } from '@connectv/sdh/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { Loading, Icon, Button } from '@codedoc/core/components';
import { CodedocTheme } from '@codedoc/core/transport';

import { PublishService } from '../publish.service';
import { PublishStatusStyle } from './style';
import { ErrorMsg } from './error';



export function PublishStatus(
  this: ThemedComponentThis<CodedocTheme>,
  _: any,
  renderer: RendererLike<any, any>
) {
  const classes = this.theme.classes(PublishStatusStyle);
  const job = PublishService.instance().lastJob;

  return <div class={classes.container} hidden={truthy(job).pipe(not)}>
    <Conditional if={job.pipe(map(j => j?.status === 'running' || j?.status === 'retrying'))} then={() => <fragment>
      <div class={classes.image}>
        <Loading color="text"/>
      </div>

      <div style="flex-grow: 1">
        {job.pipe(map(j => j?.status === 'running' ? 
          'Your blog is being published' : 
          `Retrying publish (${j?.tries} failed attempts)`))}
        {interval(500).pipe(
          map(n => Array.apply(null, Array(n % 4)).map(() => '.').join('')))}
        <div class={classes.small}>job id: <b>{job.pipe(map(j => j?.id))}</b></div>
      </div>
      <div>
        {combineLatest(interval(1000), job).pipe(map(([_, j]) => {
          const diff = new Date() as any - (j as any).created;
          const seconds = Math.floor((diff / 1000) % 60);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const days = Math.floor((diff / (1000 * 60 * 60 * 24)));

          return [
            days > 0 ? `${days}d` : '',
            hours > 0 ? `${hours}h` : '',
            minutes > 0 ? `${minutes}m` : '',
            seconds > 0 ? `${seconds}s` : '',
          ].join(' ');
        }))}
        &nbsp;&nbsp;
        <Icon align="sub">timer</Icon>
      </div>
    </fragment>}/>

    <Conditional if={job.pipe(map(j => j?.status === 'completed'))} then={() => <fragment>
      <div class={`${classes.image} success`}>
        <Icon>check_circle</Icon>
      </div>

      <div>
        Successfully published on &nbsp;
        {job.pipe(map(j => j?.created.toDateString() + ' ' + j?.created.toLocaleTimeString()))}
        <div class={classes.small}>job id: <b>{job.pipe(map(j => j?.id))}</b></div>
      </div>
    </fragment>}/>

    <Conditional if={job.pipe(map(j => j?.status === 'failed'))} then={() => <fragment>
      <div class={`${classes.image} error`}>
        <Icon>error</Icon>
      </div>

      <div style="flex-grow: 1">
        Publish failed
        (tried {job.value?.tries || 1} times).&nbsp;
        <ErrorMsg errors={job.value?.errors || []}/>
        <div class={classes.small}>job id: <b>{job.pipe(map(j => j?.id))}</b></div>
      </div>

      <Button label="Troubleshoot" url="/knowledge/setting-up-a-blog#troubleshooting"/>
    </fragment>}/>
  </div>
}


export const PublishStatus$ = /*#__PURE__*/transport(PublishStatus);