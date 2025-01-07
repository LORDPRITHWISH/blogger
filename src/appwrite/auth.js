import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

class Auth {
    constructor() {
        this.client = new Client().setProject(conf.projectId);

        // console.log('fuck',conf.projectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        // console.log(password)
        const promise = this.account.create(ID.unique(), email, password, name);

        promise.then(
            (response) => {
                console.log('sign', response); // Success
                // console.log(this);
                this.login(email, password);
                console.log('after sign', response); // Success
                return response
            },
            (error) => {
                console.log("problem at create :: ", error); // Failure
            }
        );
    }
    async login(email, password) {
        const promise = this.account.createEmailPasswordSession(email, password);
        console.log("hi log");
        promise.then(
            function (response) {
                // console.log("lo lo log", response); // Success
                return response;
            },
            (error) => {
                console.log("problem at login :: ", error); // Failure
            }
        );
    }
    async getAccount() {
        const result = this.account.get();
        // return result;
        result.then(
            function (response) {
                console.log(response); // Success
                return response;
            },
            (error) => {
                console.log("problem at get :: ", error); // Failure
            }
        );
    }

    async logout() {
        const res = await this.account.deleteSession("current");

        res.then(
            function (response) {
                console.log(response, "loged out"); // Success
                return response;
            },
            (error) => {
                console.log("problem at logout :: ", error); // Failure
                return error;
            }
        );
    }
}

const auther = new Auth();

export default auther;
