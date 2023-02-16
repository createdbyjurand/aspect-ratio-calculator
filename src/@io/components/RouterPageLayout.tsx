import { Link, Outlet } from 'react-router-dom';
import logo from 'resources/logo-sole.svg';
import './RouterPageLayout.scss';

export function RouterPageLayout() {
  return (
    <div className='router-page-layout'>
      <div className='logo--container'>
        <Link to='/'>
          <img src={logo} className='logo--img' alt='logo' />
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
