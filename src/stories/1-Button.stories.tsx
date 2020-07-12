import React from 'react';

import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y, withKnobs],
};

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const accessible = () => <button>Accessible button</button>;

export const inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>
    Inaccessible button
  </button>
);

export const withAButton = () => (
  <button disabled={boolean('Disabled', false)}>
    {text('Label', 'Hello Storybook')}
  </button>
);
