import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export function useHistorySearchObject<T>(): T {
  const history = useHistory();
  const [obj, setObj] = useState<any>({});

  useEffect(() => {
    const { search } = history.location;

    if (!search) setObj({});

    setObj(search.substring(1).split("&").reduce((ac, i) => {
      const parts = i.split('=');
      ac[parts[0]] = parts[1];
      return ac;
    }, {} as any));
  }, [history.location.search]);

  return obj;
}