import axios, { CancelTokenSource } from 'axios';

import { sleep } from '../../utils/sleep';
import { semestersMock, postMock } from '../../utils/mocks/forum.response';
import { User } from '../../core/user/models';
import { ForumPostData } from './models';
import { ErrorType } from '../../utils/error/models';

export const ForumService = {
  getCancelToken: () => axios.CancelToken.source(),

  getSemesters: async (source: CancelTokenSource) => {
    try {
      sleep(3000);
      return semestersMock;
    } catch (err) {
      throw(err);
    }
  },

  getPost: async (id: string, source: CancelTokenSource) => {
    try {
      sleep(1000);
      return postMock;
    } catch (err) {
      throw(err);
    }
  },

  createPost: async (user: User, post: Partial<ForumPostData>, source: CancelTokenSource) => {
    try {
      if (!post.title || !post.content || !post.description) { throw new Error(ErrorType.INVALID_DATA); }

      const request: ForumPostData = {
        author: user,
        title: post.title!,
        description: post.description!,
        content: post.content!,
        semesterId: post.semesterId!,
        courseId: post.courseId!
      };

      await sleep(3000);
      return { ...request, id: 'dsaufhais' } as ForumPostData;
    } catch (err) {
      throw(err);
    }
  }
};
