export interface BoardType {
  title: string;
  contents: string;
  id: number;
  userId: number;
  timestamp: Date;
}

export type User = {
  id: number;
  ProfileImg: string;
};

export type Data = {
  user: User;
  boards: BoardType[];
};
