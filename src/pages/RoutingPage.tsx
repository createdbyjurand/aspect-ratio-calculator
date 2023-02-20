import { RoutingPageLayout } from '@io/components';
import { Home, NoMatch, PureAspectRatio, SquareAspectRatio } from '@io/routes';
import { Route, Routes, useLocation } from 'react-router-dom';

export default function RoutingPage() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path='/' element={<RoutingPageLayout />}>
        <Route index element={<Home />} />
        <Route path='pure-aspect-ratio' element={<PureAspectRatio />} />
        <Route path='square-aspect-ratio' element={<SquareAspectRatio />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
