import { useState } from 'react';
import { TextAreaProps as Props } from '../types/Textarea';

const TextArea: React.FC<Props> = ({
  id,
  label,
  title,
  placeholder,
  pattern,
}) => {
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    const pattern = e.target.dataset.pattern;
    const regex = pattern && new RegExp(pattern);

    if (regex && !regex.test(newValue)) {
      return setError(title);
    }

    setError('');
  };

  return (
    <div className='form-control flex flex-col text-clr-primary'>
      <label htmlFor={id} className='font-semibold pb-2.5'>
        {label}:{' '}
      </label>
      <textarea
        className='px-4 py-2 border-2 border-slate-200 rounded-lg text-clr-secondary font-normal resize-none focus:outline-none focus:border-clr-info focus:border-2'
        name={id}
        id={id}
        title={title}
        placeholder={placeholder}
        rows={5}
        data-pattern={pattern}
        onChange={handleChange}></textarea>

      {error && (
        <span className='text-white p-1.5 bg-clr-error font-semibold text-center mt-1.5'>
          {error}
        </span>
      )}
    </div>
  );
};

export default TextArea;
