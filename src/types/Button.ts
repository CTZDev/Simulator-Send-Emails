type TypeProps = {
  type: 'button' | 'submit' | 'reset';
};

export interface ButttonProps {
  id: string;
  className?: string;
  type: TypeProps['type'];
  content: string;
}
