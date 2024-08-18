import Button from './Button';

const ButtonGroup: React.FC = () => {
  return (
    <div className='flex gap-2.5 justify-center'>
      <Button
        id={'1'}
        type={'submit'}
        className='bg-clr-info text-white'
        key={'1'}
        content='Send'
        imageIcon={{ src: './send.svg', alt: 'Send email' }}
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
