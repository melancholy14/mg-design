import React from 'react';

import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text, radios } from '@storybook/addon-knobs';

import Button from '../components/Buttons';
import { SIZE } from '../components/Buttons/types';

export default {
  title: 'Buttons',
  component: Button,
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

enum GROUP {
  Design = 'Design',
  Font = 'Font',
}

export const TryAsYouWant = () => (
  <Button
    disabled={boolean('Disabled', false, GROUP.Design)}
    outline={boolean('Outline', false, GROUP.Design)}
    light={boolean('Lighten', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    size={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    bold={boolean('Bold', false, GROUP.Font)}
    onClick={action('clicked')}
  >
    {text('Label', 'Try your label')}
  </Button>
);

export const withIcon = () => (
  <Button
    disabled={boolean('Disabled', false, GROUP.Design)}
    outline={boolean('Outline', false, GROUP.Design)}
    light={boolean('Lighten', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    size={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    bold={boolean('Bold', false, GROUP.Font)}
    onClick={action('clicked')}
  >
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const PrimaryButton = () => (
  <Button.Primary
    disabled={boolean('Disabled', false, GROUP.Design)}
    outline={boolean('Outline', false, GROUP.Design)}
    light={boolean('Lighten', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    size={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    bold={boolean('Bold', false, GROUP.Font)}
    onClick={action('clicked')}
  >
    {text('Label', 'Try your label')}
  </Button.Primary>
);

export const SecondaryButton = () => (
  <Button.Secondary
    disabled={boolean('Disabled', false, GROUP.Design)}
    outline={boolean('Outline', false, GROUP.Design)}
    light={boolean('Lighten', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    size={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    bold={boolean('Bold', false, GROUP.Font)}
    onClick={action('clicked')}
  >
    {text('Label', 'Try your label')}
  </Button.Secondary>
);

export const SuccessButton = () => (
  <Button.Success
    disabled={boolean('Disabled', false, GROUP.Design)}
    outline={boolean('Outline', false, GROUP.Design)}
    light={boolean('Lighten', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    size={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    bold={boolean('Bold', false, GROUP.Font)}
    onClick={action('clicked')}
  >
    {text('Label', 'Try your label')}
  </Button.Success>
);

export const DangerButton = () => (
  <Button.Danger
    disabled={boolean('Disabled', false, GROUP.Design)}
    outline={boolean('Outline', false, GROUP.Design)}
    light={boolean('Lighten', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    size={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    bold={boolean('Bold', false, GROUP.Font)}
    onClick={action('clicked')}
  >
    {text('Label', 'Try your label')}
  </Button.Danger>
);

export const WarningButton = () => (
  <Button.Warning
    disabled={boolean('Disabled', false, GROUP.Design)}
    outline={boolean('Outline', false, GROUP.Design)}
    light={boolean('Lighten', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    size={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    bold={boolean('Bold', false, GROUP.Font)}
    onClick={action('clicked')}
  >
    {text('Label', 'Try your label')}
  </Button.Warning>
);

export const LinkButton = () => (
  <Button.Link
    disabled={boolean('Disabled', false, GROUP.Design)}
    outline={boolean('Outline', false, GROUP.Design)}
    light={boolean('Lighten', false, GROUP.Design)}
    rounded={boolean('Rounded', false, GROUP.Design)}
    full={boolean('Full Width', false, GROUP.Design)}
    size={radios('Size', sizeOptions, sizeOptions.Default, GROUP.Font)}
    bold={boolean('Bold', false, GROUP.Font)}
    onClick={action('clicked')}
  >
    {text('Label', 'Try your label')}
  </Button.Link>
);
