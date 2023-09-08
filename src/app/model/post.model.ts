export interface IPostModel {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export interface IPostAddModel extends Partial<IPostModel> {}
