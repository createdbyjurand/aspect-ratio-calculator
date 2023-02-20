import { useState, useEffect, useRef, useMemo, useContext } from 'react';
import axios from 'axios';
import { AxiosContext } from '@io/contexts';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const useAxios = (axiosParams: any) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const contextInstance = useContext(AxiosContext);
  const instance = useMemo(() => contextInstance || axios, [contextInstance]);
  const controllerRef = useRef(new AbortController());
  const cancel = () => controllerRef.current.abort();

  const requestData = async (params: any) => {
    try {
      const res = await axios.request({ ...params, signal: controllerRef.current.signal });
      setData(res.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestData(axiosParams);
  }, []);

  return { cancel, data, error, loading };
};
