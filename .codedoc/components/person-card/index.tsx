import { CodedocTheme } from '@codedoc/core/transport';
import { ThemedComponentThis } from '@connectv/jss-theme';

import { PersonCardStyle } from './style';


export interface PersonCardOptions {
  name: string;
  avatar: string;
  subtitle?: string;
}


export function PersonCard(
  this: ThemedComponentThis<CodedocTheme>,
  options: PersonCardOptions,
  renderer: any,
  content: any
) {
  const classes = this.theme.classes(PersonCardStyle);
  return <div class={classes.card}>
    <div class={classes.top}>
      <img class={classes.avatar} src={options.avatar}/>
      <div class={classes.toptext}>
        <div class={classes.title}>{options.name}</div>
        <div class={classes.subtitle}>{options.subtitle || ''}</div>
      </div>
    </div>
    <div class={classes.content}>
      {content}
    </div>
  </div>
}
