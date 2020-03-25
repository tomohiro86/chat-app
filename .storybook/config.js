import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src/__stories__', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const withGlobal = (cb) => cb();

addDecorator(withGlobal);
addDecorator(withKnobs);
configure(loadStories, module);
