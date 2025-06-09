import { CancelToken } from "axios";

type Payload = {
  headers?: string | undefined;
}
export type PostLoginPayLoad = {
  params: {
  };
} & Payload;

export type LoginType = {
  sub: number;
  exp: string;
  token: string;
}

export type PostLoginType = LoginType[];