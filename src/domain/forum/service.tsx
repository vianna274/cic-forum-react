import { sleep } from "../../utils/sleep";
import { semestersMock } from "../../utils/mocks/forum.response";

export const ForumService = {
  getSemesters: async () => {
    try {
      sleep(3000);
      return semestersMock;
    } catch (err) {
      throw(err);
    }
  } 
}