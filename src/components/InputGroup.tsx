import ATTRIBUTES_INPUTS from '../consts/inputs';
import ATTRIBUTES_TEXTAREA from '../consts/textarea';
import Input from './Input';
import TextArea from './TextArea';

const InputGroup: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 mb-6'>
      {/* Section of Inputs */}
      {ATTRIBUTES_INPUTS.map(
        ({ label, id, type, title, placeholder, pattern }) => (
          <Input
            key={id}
            label={label}
            id={id}
            type={type}
            title={title}
            placeholder={placeholder}
            pattern={pattern}
          />
        )
      )}

      {/* Section of TextArea */}
      {ATTRIBUTES_TEXTAREA.map(({ label, id, title, pattern, placeholder }) => (
        <TextArea
          key={id}
          label={label}
          id={id}
          title={title}
          placeholder={placeholder}
          pattern={pattern}
        />
      ))}
    </div>
  );
};

export default InputGroup;
