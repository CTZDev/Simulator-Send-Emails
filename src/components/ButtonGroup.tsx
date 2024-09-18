import Button from './Button';

interface ButtonGroupProps {
  isFormValid: boolean;
  resetFields?: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  isFormValid,
  resetFields,
}) => {
  return (
    <div className='flex gap-2.5 justify-center'>
      <Button
        id={'btnSend'}
        type={'submit'}
        content='Send'
        className={`bg-clr-info text-white ${
          isFormValid ? '' : 'cursor-not-allowed'
        }`}
        imageIcon={{ src: './send.svg', alt: 'Send email' }}
        disabled={!isFormValid}
      />

      <Button
        id={'btnReset'}
        type={'button'}
        className='bg-clr-error text-white'
        content='Reset'
        imageIcon={{ src: './refresh.svg', alt: 'Refresh fields' }}
        onClick={resetFields}
      />
    </div>
  );
};

export default ButtonGroup;
