import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button>Updated 2 new{props.children}</button>;
}

Button.displayName = 'Button';
