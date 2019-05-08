import React, { FunctionComponent, useRef, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { LayoutBox, ContactListBox, SplashBox } from './containers';
import { store } from './store';

const useInterval = (cb: () => void | undefined, delay: number): void => {
  const memoryCb = useRef<() => void>();

  useEffect(() => {
    memoryCb.current = cb;
  });

  useEffect(() => {
    const time = setInterval(() => {
      if (memoryCb.current !== undefined) {
        memoryCb.current();
      }
    }, delay);
    return () => clearInterval(time);
  }, [delay]);
};

const App: FunctionComponent = () => {
  const [delay, setDelay] = useState(1000);
  const [percent, setCount] = useState(0);

  useInterval(() => {
    if (percent < 100) setCount(percent + 1);
  }, delay);

  useInterval(() => {
    if (delay > 10) setDelay(delay / 2.4);
  }, 4000);

  return (
    <Provider store={store}>
      <LayoutBox percent={percent}>{percent < 100 ? <SplashBox /> : <ContactListBox />}</LayoutBox>
    </Provider>
  );
};

export default App;
