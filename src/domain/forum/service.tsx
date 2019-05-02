import { sleep } from '../../utils/sleep';
import { semestersMock, postMock } from '../../utils/mocks/forum.response';

export const ForumService = {
  getSemesters: async () => {
    try {
      sleep(3000);
      return semestersMock;
    } catch (err) {
      throw(err);
    }
  },

  getPost: async (id: string) => {
    try {
      sleep(1000);
      return postMock;
    } catch (err) {
      throw(err);
    }
  },
};
