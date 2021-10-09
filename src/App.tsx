import React, { ReactElement } from 'react';
import GlobalStyleProvider from 'styles/GlobalStyles';

const App = (): ReactElement => (
  <GlobalStyleProvider>
    <h1>Hello World</h1>
  </GlobalStyleProvider>
);

export default App;
