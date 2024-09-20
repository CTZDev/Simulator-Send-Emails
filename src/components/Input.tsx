import { InputProps as Props } from '../types/Input';
import { useFormContext } from '../hooks/formContext';

const Input: React.FC<Props> = ({
  label,
  id,
  type,
  title,
  placeholder,
  pattern,
}) => {
  const { inputValues, inputErrors, setInputValue, setInputError } =
    useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = e.target;
    const newValue = current.value;
    const patternRegex = new RegExp(current.pattern, 'gi');

    if (!patternRegex.test(newValue)) setInputError(id, title);
    else setInputError(id, '');

    setInputValue(id, newValue);
  };

  return (
    <div className='form-control flex flex-col text-clr-primary'>
      <label htmlFor={id} className='font-semibold pb-2.5 w-min'>
        {label}:{' '}
      </label>

      <input
        className='px-4 py-2 border-2 border-slate-200 rounded-lg text-clr-secondary font-normal resize-none outline-none
        focus:border-clr-info focus:border-2 valid:border-clr-success focus:invalid:border-clr-error'
        id={id}
        type={type}
        title={title}
        placeholder={placeholder}
        pattern={pattern}
        required
        value={inputValues[id] || ''}
        onChange={handleChange}
      />

      {inputErrors[id] && (
        <span className='form-error text-white p-1.5 bg-clr-error font-semibold text-center mt-1.5'>
          {inputErrors[id]}
        </span>
      )}
    </div>
  );
};

export default Input;
