import { User } from '../../core/user/models';

export interface ForumPostData {
  title: string;
  description: string;
  content: string;
  author: User;
  id?: string;
  semesterId: string;
  courseId: string;
}

export interface ForumCourse {
  title: string;
  id: string;
  description: string;
  posts: ForumPostData[];
}

export interface ForumCategoryData {
  title: string;
  id: string;
  courses: ForumCourse[];
  imageUrl: string;
}

export interface ForumState {
  categories: ForumCategoryData[];
}

export enum ForumActionType {
  SET_CATEGORIES = 'set_categories',
}

export interface ForumAction {
  type: ForumActionType;
  categories: ForumCategoryData[];
}
