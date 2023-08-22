// @ts-ignore
export interface Attachment {
  width: number;
  height: number;
  url: string;
}
export interface User {
  user_id: number;
  username: string;
  password: string;
  photo: Attachment[];
}
