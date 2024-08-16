import { useState } from 'react';
import { InputProps as Props } from '../types/Input';

const Input: React.FC<Props> = ({
  label,
  id,
  type,
  title,
  placeholder,
  pattern,
}) => {
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = e.target;
    const newValue = current.value;
    const pattern = new RegExp(current.pattern, 'gi');
    if (!pattern.test(newValue)) return setError(current.title);

    return setError('');
  };

  return (
    <div className='form-control flex flex-col text-clr-primary'>
      <label htmlFor={id} className='font-semibold pb-2.5 w-min'>
        {label}:{' '}
      </label>
      <input
        className={`px-4 py-2 border-2 border-slate-200 rounded-xl text-clr-secondary font-normal outline-none
    focus:border-clr-info focus:border-2 valid:border-clr-success focus:invalid:border-clr-error`}
        name={id}
        id={id}
        type={type}
        title={title}
        placeholder={placeholder}
        pattern={pattern}
        required
        onChange={handleChange}
      />
      {error && (
        <span className='text-white p-1.5 bg-clr-error font-semibold text-center mt-1.5'>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
