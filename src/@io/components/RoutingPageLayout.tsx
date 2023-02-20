import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import './RoutingPageLayout.scss';

export function RoutingPageLayout() {
  return (
    <div className='components--router-page-layout'>
      <Navigation />
      <div className='outlet'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
