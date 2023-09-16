import emotion from '@emotion/styled';

export const FooterStyled = emotion.footer({
  padding: '0 20px',
  height: '10px',
  borderTop: '10px solid #000',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10px',
  overflow: 'hidden',
  transition: 'height 0.3s',
  '&:hover': {
    height: 'auto',
  },
});
