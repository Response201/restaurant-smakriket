import { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext } from 'react';

interface ContextProps {
    adminLogin?: boolean;
    setAdminLogin?: Dispatch<SetStateAction<boolean>>;
    loading?: boolean;
    setLoading?: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
  
}

export const GlobalContext = createContext<ContextProps | undefined>(undefined);

export const GlobalProvider = ({ children }: ContextProps) => {
    const [adminLogin, setAdminLogin] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
   
    return (
        <GlobalContext.Provider value={{ adminLogin, setAdminLogin, loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = (): ContextProps => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error('GlobalContext must be used within a GlobalProvider');
    }
    return context;
  };
  



  

  
