import React from 'react';

import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Button from '../components/Buttons';

export default {
  title: 'Buttons',
  component: Button,
  decorators: [withA11y, withKnobs],
};

export const TryAsYouWant = () => (
  <Button
    disabled={boolean('Disabled', false)}
    outline={boolean('Outline', false)}
    light={boolean('Lighten', false)}
    onClick={action('clicked')}
  >
    {text('Label', 'Try your label')}
  </Button>
);

export const withIcon = () => (
  <Button
    disabled={boolean('Disabled', false)}
    outline={boolean('Outline', false)}
    light={boolean('Lighten', false)}
    onClick={action('clicked')}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const PrimaryButton = () => (
  <Button.Primary
    disabled={boolean('Disabled', false)}
    outline={boolean('Outline', false)}
    light={boolean('Lighten', false)}
    onClick={action('clicked')}
  >
    {text('Label', 'Try your label')}
  </Button.Primary>
);
