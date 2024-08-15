interface Props {
  children: React.ReactNode;
}

const FormEmail: React.FC<Props> = ({ children }) => {
  return (
    <>
      <h2 className='text-center text-balance text-3xl p-8 font-semibold text-clr-primary md:text-5xl md:p-16'>
        Enviar emails 📧
      </h2>
      {children}
    </>
  );
};

export default FormEmail;
