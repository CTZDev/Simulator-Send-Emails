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
    const newValue = e.target.value;
    const pattern = new RegExp(e.target.pattern);

    if (type === 'email' && newValue.length > 0 && !pattern.test(newValue)) {
      return setError(title);
    }

    if (type === 'text' && !pattern.test(newValue)) {
      return setError(title);
    }

    return setError('');
  };

  return (
    <div className='form-control flex flex-col text-clr-primary'>
      <label htmlFor={id} className='font-semibold pb-2.5'>
        {label}:{' '}
      </label>
      <input
        className='px-4 py-2 border-2 border-slate-200 rounded-xl text-clr-secondary font-normal focus:outline-none focus:border-clr-info focus:border-2'
        name={id}
        id={id}
        type={type}
        title={title}
        placeholder={placeholder}
        pattern={pattern}
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
