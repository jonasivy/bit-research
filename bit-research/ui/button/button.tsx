import React, { ReactNode } from 'react';

export type ButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className='test test test test test'>
      {children}
    </button>
  );
}
