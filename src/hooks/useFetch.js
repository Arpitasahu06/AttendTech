import { useState, useEffect } from 'react';

// Generic hook — kisi bhi API function ke saath use karo
export function useFetch(apiFn, deps = []) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    apiFn()
      .then(result => {
        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message || 'Something went wrong');
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  function retry() {
    setLoading(true);
    setError(null);
    apiFn()
      .then(result => { setData(result); setLoading(false); })
      .catch(err  => { setError(err.message); setLoading(false); });
  }

  return { data, loading, error, retry };
}
