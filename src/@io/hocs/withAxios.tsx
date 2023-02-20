// https://dog.ceo/api/breeds/image/random/3
// https://dog.ceo/api/breed/hound/images

import { useState } from 'react';

export const withAxios = (WrappedComponent, url: string) => props => {
  const [data, setData] = useState({ data: null });
  return <WrappedComponent data={data} {...props} />;
};
