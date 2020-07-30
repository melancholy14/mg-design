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

export const HeadingH1 = () => (
  <Heading.H1 bold={boolean('Bold', false)}>
    {text('Label', 'Heading H1')}
  </Heading.H1>
);

export const HeadingH2 = () => (
  <Heading.H2 bold={boolean('Bold', false)}>
    {text('Label', 'Heading H2')}
  </Heading.H2>
);

export const HeadingH3 = () => (
  <Heading.H3 bold={boolean('Bold', false)}>
    {text('Label', 'Heading H3')}
  </Heading.H3>
);

export const HeadingH4 = () => (
  <Heading.H4 bold={boolean('Bold', false)}>
    {text('Label', 'Heading H4')}
  </Heading.H4>
);

export const HeadingH5 = () => (
  <Heading.H5 bold={boolean('Bold', false)}>
    {text('Label', 'Heading H5')}
  </Heading.H5>
);
