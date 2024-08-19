import Button from './Button';

interface ButtonGroupProps {
  isFormValid: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ isFormValid }) => {
  return (
    <div className='flex gap-2.5 justify-center'>
      <Button
        id={'1'}
        type={'submit'}
        key={'1'}
        content='Send'
        className={`bg-clr-info text-white ${
          isFormValid ? '' : 'cursor-not-allowed'
        }`}
        imageIcon={{ src: './send.svg', alt: 'Send email' }}
        disabled={!isFormValid}
      />
      <Button
        id={'2'}
        type={'reset'}
        className='bg-clr-error text-white'
        key={'2'}
        content='Reset'
        imageIcon={{ src: './refresh.svg', alt: 'Refresh fields' }}
      />
    </div>
  );
};

export default ButtonGroup;
