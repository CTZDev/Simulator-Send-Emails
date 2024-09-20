import { useRef } from 'react';
import Swal from 'sweetalert2';
import { useFormContext } from '../hooks/formContext';

interface Props {
  children: React.ReactNode;
  setIsFormValid: (isFormValid: boolean) => void;
}

const FormEmail: React.FC<Props> = ({ children, setIsFormValid }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { resetForm } = useFormContext();

  const checkFormValidity = () => {
    if (formRef.current) {
      const form = formRef.current;
      const isValid = form.checkValidity();
      setIsFormValid(isValid);
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity()) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your e-mail has been sent successfully',
        showConfirmButton: false,
        timer: 1200,
      }).then(() => {
        if (formRef.current) {
          resetForm();
          setIsFormValid(false);
        }
      });
    }
  };

  return (
    <>
      <h2 className='text-center text-balance text-3xl p-8 font-semibold text-clr-primary md:text-5xl md:p-16'>
        Enviar emails 📧
      </h2>
      <form
        action='index.html'
        method='POST'
        ref={formRef}
        onSubmit={sendEmail}
        onChange={checkFormValidity}
        className='max-w-[768px] m-auto px-16 py-14 text-sm rounded-xl shadow-2xl shadow-black bg-white md:text-base'>
        {children}
      </form>
    </>
  );
};

export default FormEmail;
