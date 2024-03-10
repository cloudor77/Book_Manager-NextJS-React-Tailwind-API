export interface IBook {
  title?: string;
  description?: string;
  price?: number;
  _id?: string;
}

export type IBookArr = IBook[];

export type BookParams = {
  bookId: string;
};

export interface NoEdit {
  editAvailable: boolean;
}
