import React, { ReactNode } from 'react';

export type SpanProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Span({ children }: SpanProps) {
  return (
    <span className='test asd'>
      {children}
    </span>
  );
}
