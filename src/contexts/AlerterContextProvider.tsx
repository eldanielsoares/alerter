/* eslint-disable prettier/prettier */
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import {Alert} from '../components/Alert';

interface AlertProps {
  status: 'error' | 'warning' | 'success';
  title: string;
  message: string;
}

interface AlerterContextData {
  onShow: (options: AlertProps) => void;
}

const AlerterContext = createContext({} as any);

interface ProviderProps {
  children: ReactNode;
}

export const AlertContextProvider: React.FC<ProviderProps> = ({children}) => {
  const [togle, setTogle] = useState(false);
  const [options, setOptions] = useState<AlertProps>({
    status: 'success',
    message: '',
    title: '',
  });

  const onShow = useCallback((optionsProps: AlertProps) => {
    setTogle(true);
    setOptions(optionsProps);
    setTimeout(() => {
      setTogle(false);
    }, 3000);
  }, []);

  return (
    <>
      {togle && (
        <Alert
          message={options.message}
          title={options.title}
          status={options.status}
        />
      )}
      <AlerterContext.Provider value={{onShow}}>
        {children}
      </AlerterContext.Provider>
    </>
  );
};

export const useAlerter = (): AlerterContextData => {
  const context = useContext(AlerterContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
