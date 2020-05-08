import { RendererLike, ref, Ref } from '@connectv/html';
import { ThemedComponentThis } from '@connectv/jss-theme';
import { CodedocTheme } from '@codedoc/core/transport';

import { ActionOverlayStyle } from './style';


export interface ActionOverlayOptions {
  title: any;
  actions?: any;
  close?: Ref<() => void>;
}


export function ActionOverlay(
  this: ThemedComponentThis<CodedocTheme>,
  options: ActionOverlayOptions,
  renderer: RendererLike<any, any>,
  content: any,
) {
  const classes = this.theme.classes(ActionOverlayStyle);
  const holder = ref<HTMLElement>();

  this.track({
    bind() {
      setTimeout(() => holder.$.classList.add('active'), 10);
      if (!('backdropFilter' in holder.$.style) && !('-webkit-backdrop-filter' in holder.$.style)) {
        holder.$.style.background = 'rgba(48, 48, 48, .99)';
      }
    }
  });

  const close = () => { 
    holder.$.classList.remove('active');
    setTimeout(() => holder.$.remove(), 300);
  };

  if (options.close) options.close.resolve(close);

  return <div class={classes.overlay} _ref={holder} onkeydown={event => {
    const key = (event as KeyboardEvent).key;
    if (key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close();
    }
  }}>
    <div class={classes.content}>
      <div class={classes.top}>
        <div class={classes.title}>{options.title}</div>
        <div class={classes.close} onclick={close}/>
      </div>
      <div class={classes.body}>
        {content}
        {
          options.actions?
          <fragment>
            <br/>
            <div class={classes.actions}>
              {options.actions}
            </div>
          </fragment>:
          ''
        }
      </div>
    </div>
  </div>;
}


