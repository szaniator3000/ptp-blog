interface BlogPost {
  slug?: string ;
  title: string;
  author: string;
  publicationDate: Date;
  content: string;
  comments: string[];
  category: string;
  tags: string[];
  image: string;
}
