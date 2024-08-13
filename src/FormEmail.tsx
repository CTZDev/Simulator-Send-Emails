interface Props {
  children: React.ReactNode;
}

const FormEmail: React.FC<Props> = ({ children }) => {
  return (
    <>
      <h2 className='text-center text-balance text-4xl p-12 font-semibold'>
        Enviar emails
      </h2>
      {children}
    </>
  );
};

export default FormEmail;
