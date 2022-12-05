import React from 'react';
import { render } from '@testing-library/react';
import { BasicSpan } from './span.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSpan />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
