import { RouterPageLayout } from '@io/components';
import { Home, NoMatch, PureRatio, SquareRatio } from '@io/routes';
import { Route, Routes, useLocation } from 'react-router-dom';

export default function RoutingPage() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path='/' element={<RouterPageLayout />}>
        <Route index element={<Home />} />
        <Route path='pure-ratio' element={<PureRatio />} />
        <Route path='square-ratio' element={<SquareRatio />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
