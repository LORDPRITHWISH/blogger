import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

class Auth {
  constructor() {
    this.client = new Client().setProject(conf.projectId);

    // console.log('fuck',conf.projectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, username  }) {
    try {
      const response = await this.account.create(ID.unique(), email, password, username);
      console.log("Account created successfully:", response);
      if (response) {
        await this.login({email, password});
      }
      return response; // Ensure this returns the response
    } catch (error) {
      console.error("Error during account creation:", error);
      throw error;
    }
  }

  async login({email, password}) {

    try{
      const session = await this.account.createEmailPasswordSession(email, password);
      return session;
    }
    catch(error){
      console.log("problem at login :: ", error); // Failure
    }

  }
  async getAccount() {
    const response = await this.account.get();
    return response;
  }

  async logout() {
    try{
      const res = await this.account.deleteSession("current");
      console.log(res, "loged out"); // Success
      return res;
    }
    catch(error){
      console.log("problem at logout :: ", error); // Failure
    }
  }
}

const auther = new Auth();

export default auther;
