import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { MainWrapperStyled } from '../../styles';
import { Footer } from '../../components/Footer';

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <MainWrapperStyled>
        <Outlet />
      </MainWrapperStyled>
      <Footer />
    </>
  );
};
