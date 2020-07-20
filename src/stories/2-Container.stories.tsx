import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Container from '../components/Container';

export default {
  title: 'Container',
  component: Container,
  decorators: [withA11y, withKnobs],
};

export const TryAsYouWant = () => (
  <Container full={boolean('Full-Width', false)}>
    <p>
      {text(
        'Content',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum erat ac tincidunt pellentesque. Maecenas sem massa, sollicitudin eu eleifend non, aliquet sit amet dolor. Nunc vulputate arcu eget nunc sagittis ultrices. Etiam malesuada, libero vehicula finibus congue, tellus nunc pulvinar augue, id dapibus sapien ipsum ac augue. Cras mauris augue, facilisis non cursus non, mattis quis metus. Nunc sed fringilla velit. Ut suscipit id lectus quis rutrum.`
      )}
    </p>
  </Container>
);
