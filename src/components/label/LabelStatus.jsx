function LabelStatus({ children, type = 'default' }) {
  let styleClassName = 'text-gray-500 bg-gray-100';

  switch (type) {
    case 'success':
      styleClassName = 'text-green-500 bg-green-100';
      break;
    case 'warning':
      styleClassName = 'text-orange-500 bg-orange-100';
      break;
    case 'danger':
      styleClassName = 'text-red-500 bg-red-100';
      break;

    default:
      break;
  }
  return (
    <div
      className={`inline-block p-[10px] rounded-md text-[14px] font-bold ${styleClassName}`}
    >
      {children}
    </div>
  );
}

export default LabelStatus;
