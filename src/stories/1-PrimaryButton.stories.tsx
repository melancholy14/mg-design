import React from 'react';

import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import { PrimaryButton } from '../components/Buttons';

export default {
  title: 'PrimaryButton',
  component: PrimaryButton,
  decorators: [withA11y, withKnobs],
};

export const Text = () => (
  <PrimaryButton onClick={action('clicked')}>Hello Button</PrimaryButton>
);

export const Emoji = () => (
  <PrimaryButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </PrimaryButton>
);

export const Disabled = () => <PrimaryButton disabled>Disabled</PrimaryButton>;

export const Accessible = () => (
  <PrimaryButton>Accessible button</PrimaryButton>
);

export const TryAsYouWant = () => (
  <PrimaryButton disabled={boolean('Disabled', false)}>
    {text('Label', 'Try your label')}
  </PrimaryButton>
);
