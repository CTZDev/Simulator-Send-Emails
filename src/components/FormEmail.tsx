import { useRef } from 'react';
import Swal from 'sweetalert2';

interface Props {
  children: React.ReactNode;
}

const FormEmail: React.FC<Props> = ({ children }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your e-mail has been sent successfully',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      if (formRef.current) {
        formRef.current.reset(); // Limpiar los campos del formulario
        //formRef.current.submit(); // Enviar el formulario
      }
    });
  };

  return (
    <>
      <h2 className='text-center text-balance text-3xl p-8 font-semibold text-clr-primary md:text-5xl md:p-16'>
        Enviar emails 📧
      </h2>
      <form
        action='/'
        method='POST'
        ref={formRef}
        onSubmit={sendEmail}
        className='max-w-[768px] m-auto px-16 py-14 text-sm rounded-xl shadow-2xl shadow-black bg-white md:text-base'>
        {children}
      </form>
    </>
  );
};

export default FormEmail;
