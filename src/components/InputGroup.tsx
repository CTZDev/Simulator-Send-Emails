import ATTRIBUTES_INPUTS from '../consts/inputs';
import ATTRIBUTES_TEXTAREA from '../consts/textarea';
import Input from './Input';
import TextArea from './TextArea';

const InputGroup: React.FC = () => {
  return (
    <div className='flex flex-col gap-6 mb-6'>
      {/* Section of Inputs */}
      {ATTRIBUTES_INPUTS.map((data) => (
        <Input key={data.id} {...data} />
      ))}

      {/* Section of TextArea */}
      {ATTRIBUTES_TEXTAREA.map((data) => (
        <TextArea key={data.id} {...data} />
      ))}
    </div>
  );
};

export default InputGroup;
