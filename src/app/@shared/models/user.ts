export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;

  provider: string;
  confirmed: boolean;
  blocked: boolean;
  create_at: Date;
  update_at: Date;

  role: Role;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
}

export interface Token {
  jwt: string;
  user?: User;
}
