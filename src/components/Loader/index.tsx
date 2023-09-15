import Spinner from 'react-bootstrap/Spinner';
import { SpinnerWrapper } from './styles';

export const Loader: React.FC = () => {
  return (
    <SpinnerWrapper>
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </SpinnerWrapper>
  );
};

export default Loader;
