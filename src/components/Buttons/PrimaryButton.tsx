import React from 'react';

type PrimaryButtonProps = {
  children: React.ReactNode;
};

function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return <button {...props}>{children}</button>;
}

export default PrimaryButton;
