import React from 'react';
import {AlertContextProvider} from './contexts/AlerterContextProvider';
import {Home} from './pages/Home';

const App: React.FC = () => {
  return (
    <AlertContextProvider>
      <Home />
    </AlertContextProvider>
  );
};

export default App;
