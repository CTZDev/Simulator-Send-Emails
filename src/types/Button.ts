import { ImageIconPros } from './Image';

type TypeProps = {
  type: 'button' | 'submit' | 'reset';
};

export interface ButttonProps {
  id: string;
  className?: string;
  type: TypeProps['type'];
  content: string;
  disabled?: boolean;
  imageIcon?: ImageIconPros;
  onClick?: () => void;
}
