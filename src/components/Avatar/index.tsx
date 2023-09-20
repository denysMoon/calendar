import { ImageStyled } from './styles';

interface IAvatar {
  src: string;
}

export const Avatar: React.FC<IAvatar> = ({ src }) => {
  return <ImageStyled src={src} alt="User's avatar" roundedCircle />;
};
