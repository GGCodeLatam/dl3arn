import {
  AuthCredential,
  EmailAuthCredential,
  User,
  UserCredential,
} from "firebase/auth";

/* -------------------- PROVIDERS -------------------- */
export type Provider = "email" | "google";

/* -------------------- PARAMS -------------------- */
export interface RegisterParams {
  email: string;
  password: string;
  validate: string;
}

export interface LoginParams {
  email?: string;
  password?: string;
}

export type UserUpdateParams = Partial<User>;

export type Credentials = {
  email?: string;
  password?: string;
};

export type AuthResponse = Promise<{
  error: { message: string; code: string } | null;
  user: UserCredential | null;
}>;

/* -------------------- FUNCTIONS -------------------- */
export type EmailRegister = (_: RegisterParams) => AuthResponse;
export type Login = (_: LoginParams, provider?: Provider) => AuthResponse;
export type GetEmailCredentials = (
  email: string,
  password: string
) => EmailAuthCredential;
export type UpdateCredentials = (
  password: string,
  _: Credentials
) => Promise<void>;
export type Reauthenticate = (
  _: AuthCredential
) => Promise<UserCredential | null>;
export type UpdateUser = (_: UserUpdateParams) => Promise<void | null>;

/* -------------------- CONTEXT -------------------- */
export interface UserData {
  user: User | null;
  isLoading: boolean;
}

export interface FirebaseContext {
  auth: {
    data: UserData;
    logout: () => void;
    signUp: EmailRegister;
    login: Login;
    updateCredentials: UpdateCredentials;
    updateUser: UpdateUser;
  };
}

/* -------------------- STORE -------------------- */

export interface Section {
  position: number;
  videos: string[];
}

export interface Sections<T = Section> {
  [key: string]: T;
}
export interface CourseModel {
  contract: ContractModel;
  created_at: number;
  description: string;
  id: string;
  image: string;
  instructor: InstructorModel;
  name: string;
  opensea?: string;
  rampp: RamppModel | null;
  score: number;
  sections: Sections;
  total_duration: string;
}

export type Network = "polygon";
export interface RamppModel {
  abi_uri: string;
  buttonId: string;
  proof_uri: string;
  network: Network;
}

export interface VideoModel {
  duration: string;
  free: boolean;
  name: string;
  id: string;
  videoId: string;
}

export interface ContractModel {
  address: string;
  chainId: number;
}

export interface InstructorModel {
  name: string;
}
