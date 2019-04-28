import { User } from "../../contexts/user/user.models";

export interface ForumPost {
  title: string;
  description: string;
  content: string;
  author: User;
}

export interface ForumCategory {
  title: string;
  description: string;
  posts: ForumPost[];
}

export interface ForumState {
  categories: ForumCategory[];
}

export enum ForumActionType {
  SET_CATEGORIES = 'set_categories'
}

export interface ForumAction {
  type: ForumActionType;
  categories: ForumCategory[];
}