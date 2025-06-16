
export type PostLoginPayLoad = {
  email: string;
  password: string;
};

export type LoginType = {
  sub: number;
  exp: string;
  token: string;
}

export type PostLoginType = LoginType[];