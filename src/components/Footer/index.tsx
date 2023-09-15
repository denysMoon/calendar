import { FooterStyled } from './styles';

export const Footer = () => {
  return (
    <FooterStyled>
      <span>
        Mail:{' '}
        <a href="denysulvanskyi@gmail.com" target="_blank">
          denysulvanskyi@gmail.com
        </a>
      </span>
      <span>
        Telegram:{' '}
        <a href="https://t.me/denysulvanskyi" target="_blank">
          @denysulvanskyi
        </a>
      </span>
    </FooterStyled>
  );
};
