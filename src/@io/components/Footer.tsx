import { LogoCbjSvg } from '@io/svgs';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='components--footer'>
      <div className='container'>
        <div className='logo--container'>
          <img src={LogoCbjSvg} className='logo--img' alt='logo' />
        </div>
        <p>{t('footer--copyright')}</p>
      </div>
    </footer>
  );
}
