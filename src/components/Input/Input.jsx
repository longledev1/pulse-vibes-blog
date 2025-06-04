import { useController } from 'react-hook-form';

function Input({
  name = '',
  type = 'text',
  children,
  hasIcon = false,
  control,
  shouldFocusError,
  ...props
}) {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        {...field}
        {...props} // KHÔNG chứa hasIcon
        className={`p-4 bg-gray-200 w-full bg-grayLight rounded border border-gray-200 transition duration-200 ease-linear outline-none focus:border-2 focus:border-primary focus:bg-white ${
          hasIcon ? '' : ''
        } ${shouldFocusError ? 'focus:border-2 focus:border-red-700' : ''}`}
      />
      {children}
    </div>
  );
}

export default Input;
