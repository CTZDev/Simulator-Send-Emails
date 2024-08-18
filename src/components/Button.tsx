import { ButttonProps as Props } from '../types/Button';
import Image from './Image';

const Button: React.FC<Props> = ({
  id,
  type,
  content,
  className,
  imageIcon,
}) => {
  return (
    <button
      type={type}
      id={id}
      className={`${className} p-2.5 w-44 border rounded-lg text-base font-semibold flex items-center justify-center gap-2.5 transition hover:scale-[1.025] md:text-lg`}
      value={type.charAt(0).toUpperCase().concat(type.slice(1))}>
      {imageIcon && (
        <Image src={imageIcon.src} alt={imageIcon.alt} width={28} height={28} />
      )}
      <p>{content}</p>
    </button>
  );
};

export default Button;
