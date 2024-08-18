import { ImageIconPros as Props } from '../types/Image';

const Image: React.FC<Props> = ({ src, alt, width, height }) => {
  return (
    <span>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='invert'
      />
    </span>
  );
};

export default Image;
