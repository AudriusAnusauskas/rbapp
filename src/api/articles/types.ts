export type Article = {
  id?: number;
  title?: string;
  publicationTitle?: string;
  location?: string;
  year?: string | number;
  url?: string;
  imgUrl?: string;
  text?: string;
  photoAuthor?: string;
  "Vol."?: string;
  coAuthor?: string;
};

export type Test = {
  title: string;
};
