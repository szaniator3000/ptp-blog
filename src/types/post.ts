export interface BlogPost {
    slug?: string;
    title: string;
    author: string;
    publicationDate: Date;
    content: string;
    category: string;
    tags: string[];
    image?: string;
}

