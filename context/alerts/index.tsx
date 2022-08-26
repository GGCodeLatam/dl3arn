import { createContext, ReactNode, useContext, useState } from "react";
import {
  Alert,
  AlertContext,
  CreateAlert,
  RemoveAlert,
} from "utils/types/alerts";

const alertsContext = createContext<AlertContext>({
  alerts: [],
  createAlert: () => {},
  removeAlert: () => {},
});

interface ProviderProps {
  children: ReactNode;
}
function AlertProvider({ children }: ProviderProps) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const createAlert: CreateAlert = (newAlert) => {
    setAlerts((old) => [
      ...old,
      { ...newAlert, id: Math.random().toString(16).slice(2) },
    ]);
  };
  const removeAlert: RemoveAlert = (id) => {
    setAlerts((old) => old.filter((value) => value.id !== id));
  };

  const value = {
    alerts,
    createAlert,
    removeAlert,
  };

  return (
    <alertsContext.Provider value={value}>{children}</alertsContext.Provider>
  );
}

export default AlertProvider;

export function useAlerts() {
  return useContext(alertsContext);
}
