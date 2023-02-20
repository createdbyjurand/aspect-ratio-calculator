import axios, { AxiosInstance } from 'axios';
import { createContext, useEffect, useRef } from 'react';

interface IAxiosContext {}

export const AxiosContext = createContext<IAxiosContext | null | AxiosInstance>(null);

interface IAxiosContextProviderProps {
  config: {};
  requestInterceptors: [];
  responseInterceptors: [];
  children: React.ReactNode;
}

export const AxiosContextProvider = (props: IAxiosContextProviderProps) => {
  const instanceRef = useRef(axios.create(props.config));

  useEffect(() => {
    props.requestInterceptors.forEach(interceptor => {
      instanceRef.current.interceptors.request.use(interceptor);
    });
    props.responseInterceptors.forEach(interceptor => {
      instanceRef.current.interceptors.response.use(interceptor);
    });
  }, []);

  return <AxiosContext.Provider value={instanceRef.current}>{props.children}</AxiosContext.Provider>;
};
