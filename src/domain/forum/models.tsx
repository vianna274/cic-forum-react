import { User } from "../../core/user/models";

export interface ForumPost {
  title: string;
  description: string;
  content: string;
  author: User;
  id: string;
}

export interface ForumCourse {
  title: string;
  id: string;
  description: string;
  posts: ForumPost[];
}

export interface ForumSemester {
  title: string;
  id: string;
  courses: ForumCourse[];
}

export interface ForumState {
  semesters: ForumSemester[];
}

export enum ForumActionType {
  SET_SEMESTERS = 'set_semesters'
}

export interface ForumAction {
  type: ForumActionType;
  semesters: ForumSemester[];
}