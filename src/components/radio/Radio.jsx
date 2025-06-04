import React from 'react';
import { useController } from 'react-hook-form';

function Radio({ checked, name, control, children, ...rest }) {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });

  return (
    <label className="flex items-center gap-x-2 cursor-pointer">
      <input
        checked={checked}
        type="radio"
        {...field}
        {...rest}
        className="w-4 h-4 accent-primary"
      />
      {children && <span>{children}</span>}
    </label>
  );
}

export default Radio;
