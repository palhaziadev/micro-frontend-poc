import styled from 'styled-components';
import { store } from '@org/state-manager';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  store.subscribe(() => {
    console.log('aaa state in react', store.getState());
  });

  const handleIncrement = () => {
    store.dispatch({ type: 'INCREMENT' });
  };

  return (
    <StyledApp>
      <button onClick={handleIncrement}>Increment</button>
      <NxWelcome title="checkout" />
    </StyledApp>
  );
}

export default App;
