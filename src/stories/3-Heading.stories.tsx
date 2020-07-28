import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Heading } from '../typography';

export default {
  title: 'Headings',
  component: Heading,
  decorators: [withA11y, withKnobs],
};

export const TryAsYouWant = () => (
  <Heading bold={boolean('Bold', false)}>{text('Label', 'Heading')}</Heading>
);

export const EnormousHeading = () => (
  <Heading.Enormous bold={boolean('Bold', false)}>
    {text('Label', 'Enormous Heading')}
  </Heading.Enormous>
);
