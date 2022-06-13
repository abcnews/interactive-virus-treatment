import './keyshapejs.js';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { selectMounts } from '@abcnews/mount-utils';
import { loadScrollyteller } from '@abcnews/scrollyteller';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

whenOdysseyLoaded.then(() => {
  const scrollyData = loadScrollyteller('', 'u-full');
  const [mountEl] = selectMounts('scrollout');

  if (mountEl) {
    mountEl.classList.add('u-full');
    render(<App scrollyData={scrollyData} />, mountEl);
  }
});
