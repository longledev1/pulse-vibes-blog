import { useController } from 'react-hook-form';

function Toggle(props) {
  const { field } = useController({
    name: props.name,
    control: props.control,
  });

  return (
    <label>
      <input {...field} type="checkbox" className="sr-only" readOnly />
      <div
        onClick={() => field.onChange(!field.value)}
        className={`inline-block w-[70px] h-[42px] relative cursor-pointer rounded-full p-1 transition-all ${
          field.value ? 'bg-primary' : 'bg-gray-300'
        }`}
      >
        <span
          className={`transition-all w-[34px] h-[34px] bg-white rounded-full inline-block ${
            field.value ? 'translate-x-[28px]' : ''
          }`}
        ></span>
      </div>
    </label>
  );
}
export default Toggle;
