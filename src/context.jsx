import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = props => {
  const { children } = props;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ sidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
