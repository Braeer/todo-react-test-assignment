import { useEffect, useState } from 'react';
import type { Store } from './state-manager';

export function useStore<T>(store: Store<T>): T {
  const [state, setState] = useState(() => store.getState());

  useEffect(() => {
    const callback = () => {
      const nextState = store.getState();
      setState((prev) => (prev !== nextState ? nextState : prev));
    };

    const unsubscribe = store.subscribe(callback);

    return () => unsubscribe();
  }, [store]);

  return state;
}
