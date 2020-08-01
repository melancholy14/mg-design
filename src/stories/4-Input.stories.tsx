import React from 'react';

import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';

import { STYLES } from 'common/styles';
import { SIZE } from 'common/sizes';

import { Input } from '../form';

export default {
  title: 'Input',
  component: Input,
  decorators: [withA11y, withKnobs],
};

const sizeOptions: {
  [key: string]: keyof typeof SIZE;
} = {
  Small: 'small',
  Default: 'default',
  Medium: 'medium',
  Large: 'large',
};

const styleOptions: {
  [key: string]: keyof typeof STYLES;
} = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Default: 'default',
};

enum GROUP {
  Design = 'Design',
  Font = 'Font',
}

export const TryAsYouWant = () => (
  <Input
    disabled={boolean('Disabled', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    extent={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    inputStyle={radios(
      'Style',
      styleOptions,
      styleOptions.Default,
      GROUP.Design
    )}
    bold={boolean('Bold', false, GROUP.Font)}
    onChange={action('changed')}
    value={text('Label', '')}
    placeholder="Fill in `Other > Label`"
  />
);

export const withIcon = () => (
  <Input
    disabled={boolean('Disabled', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    extent={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    inputStyle={radios(
      'Style',
      styleOptions,
      styleOptions.Default,
      GROUP.Design
    )}
    bold={boolean('Bold', false, GROUP.Font)}
    onChange={action('changed')}
    value="😀 😎 👍 💯"
  />
);
