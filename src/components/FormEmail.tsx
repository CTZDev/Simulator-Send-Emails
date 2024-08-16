interface Props {
  children: React.ReactNode;
}

const FormEmail: React.FC<Props> = ({ children }) => {
  return (
    <>
      <h2 className='text-center text-balance text-3xl p-8 font-semibold text-clr-primary md:text-5xl md:p-16'>
        Enviar emails 📧
      </h2>
      <form className='max-w-[768px] m-auto px-16 py-14 text-sm rounded-xl shadow-2xl shadow-black bg-white md:text-base'>
        {children}
      </form>
    </>
  );
};

export default FormEmail;
