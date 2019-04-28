import { AuthRegister } from "./auth.models";
import { sleep } from "../../utils/sleep";

export const Auth = {
  register: async (user: AuthRegister) => {
    try {
      const { birthDay, firstName, lastName, username } = user;
      const response: Partial<AuthRegister> = { birthDay, firstName, lastName, username };
      await sleep(3000);
      return response;
    } catch (err) {
      throw (err);
    }
  },

  login: async (username: string, password: string) => {
    try {
      await sleep(3000);
      if (username !== 'teste' || password !== 'teste') { throw new Error('invalid user'); }
      return { username };
    } catch (err) {
      throw(err);
    }
  }
}