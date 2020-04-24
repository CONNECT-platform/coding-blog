import { RendererLike } from '@connectv/html';
import { Button } from '@codedoc/core/components';


export function JoinButton(_: any, renderer: RendererLike<any, any>) {
  return <Button onclick='console.log("halo!")' label='Join the Waiting List for Beta'/>;
}

