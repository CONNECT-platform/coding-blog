import { onReady, funcTransport } from '@connectv/sdh/transport';


export function deferBgImages() {
  onReady(() => {
    const _exec = () => {
      document.querySelectorAll('[data-bg-image]').forEach(el$ => {
        const _ogStyle = el$.getAttribute('style');
        setTimeout(() => {
          el$.setAttribute('style', [
            ...(_ogStyle?[_ogStyle]:[]), 
            `background-image: url('${el$.getAttribute('data-bg-image')}')`
          ].join(';'));
        }, 1);
      });
    };

    _exec(); window.addEventListener('navigation', _exec);
  });
}

export const deferBgImages$ = /*#__PURE__*/funcTransport(deferBgImages);