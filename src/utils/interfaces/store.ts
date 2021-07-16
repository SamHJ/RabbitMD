// define typings/model for the store

export interface RootState {
  deviceInfo: Record<string, unknown>,
  onboardingShown: boolean,
  darkTheme: boolean;
  userdata: Record<string, unknown>;
  token: string;
  geodata: Record<string, unknown>;
  version: string;
  currentRoute: string;
}

export interface Commit {
  commit: CommitOption;
}

export interface CommitOption {
  (type: string, payload?: unknown, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

export interface CommitOptions {
  silent?: boolean;
  root?: boolean;
}

export interface Payload {
  type: string;
}
