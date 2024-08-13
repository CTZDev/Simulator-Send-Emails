import ATTRIBUTES_INPUTS from './consts/inputs';
import Input from './Input';

const Inputs: React.FC = () => {
  return (
    <>
      {ATTRIBUTES_INPUTS.map(({ id, type, title, placeholder, pattern }) => (
        <>
          <Input
            id={id}
            key={id}
            type={type}
            title={title}
            placeholder={placeholder}
            pattern={pattern}
          />
        </>
      ))}
    </>
  );
};

export default Inputs;
