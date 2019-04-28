import { sleep } from "../../utils/sleep";
import { categoriesMock } from "../../utils/mocks/forum.response";

export const ForumService = {
  getCategories: async () => {
    try {
      sleep(3000);
      return categoriesMock;
    } catch (err) {
      throw(err);
    }
  } 
}