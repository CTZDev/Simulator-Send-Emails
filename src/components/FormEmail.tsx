import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from 'react';
import { useEffect, useRef, useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Swal from 'sweetalert2';

interface Props {
  children: React.ReactNode;
}

const FormEmail: React.FC<Props> = ({ children }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const checkFormValidity = () => {
    if (formRef.current) {
      const form = formRef.current;
      const isValid = form.checkValidity();
      setIsFormValid(isValid);
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormValid) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your e-mail has been sent successfully',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        if (formRef.current) {
          formRef.current.reset(); // Limpiar los campos del formulario
          setIsFormValid(false); // Deshabilitar el botón nuevamente
          // Forzar una actualización de la validez después del reinicio
          checkFormValidity(); // Revalidar el formulario después de reiniciar
        }
      });
    }
  };

  useEffect(() => {
    checkFormValidity(); // Verificar validez al cargar el componente
  }, []);

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
        onChange={checkFormValidity} // Verificar validez en tiempo real
        className='max-w-[768px] m-auto px-16 py-14 text-sm rounded-xl shadow-2xl shadow-black bg-white md:text-base'>
        {Children.map(children, (child) => {
          if (isValidElement(child) && child.type === ButtonGroup) {
            return cloneElement(
              child as ReactElement<{ isFormValid: boolean }>,
              { isFormValid }
            );
          }
          return child;
        })}
      </form>
    </>
  );
};

export default FormEmail;
