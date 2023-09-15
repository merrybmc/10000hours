import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './router/Router';

const GlobalStyle = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
