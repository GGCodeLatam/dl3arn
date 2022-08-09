export type AlertTypes = "warning" | "error" | "success" | "info";

export interface Alert {
  id: string;
  message: string;
  type: AlertTypes;
}

export type CreateAlert = (_: Omit<Alert, "id">) => any;
export type RemoveAlert = (_: string) => any;

export interface AlertContext {
  alerts: Alert[];
  createAlert: CreateAlert;
  removeAlert: RemoveAlert;
}
