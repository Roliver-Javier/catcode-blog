import { PostType } from '../../enums/post-type.enum';

export interface MediumPost{
    author: string;
    categories : [];
    content : string;
    description : string;
    enclosure : object;
    guid : string;
    link : string;
    pubDate : string;
    thumbnail : string;
    title : string;
    type : PostType;
}