import { createElement, render } from './dom';
import './index.sass';

const main = () => {
  const renderToBody = render(document.body);

  const inc = createElement(
    'button',
    { onclick: () => fetch('/inc') },
    '+',
  );

  const dec = createElement(
    'button',
    { onclick: () => fetch('/dec') },
    '-',
  );

  const pause = createElement(
    'button',
    { onclick: () => fetch('/pause') },
    '||',
  );

  renderToBody(inc, dec, pause);
};

main();
