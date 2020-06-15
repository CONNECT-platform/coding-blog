import { RendererLike } from '@connectv/html';

import { PublishErrors } from '../publish.service';


export function ErrorMsg({ errors } : { errors: PublishErrors }, renderer: RendererLike<any, any>) {
  const anchor = errors[Object.keys(errors).length];
  if (anchor.stage === 'git-clone') {
    return <span>Repo cannot be cloned.</span>;
  } else if (anchor.stage === 'install-codedoc') {
    return <span>Dependencies cannot be installed.</span>;
  } else if (anchor.stage === 'build-codedoc') {
    return <span>Project cannot be built.</span>;
  } else {
    return <span>Unknown error.</span>;
  }
}