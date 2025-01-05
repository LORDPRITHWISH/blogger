import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class Auth {
    constructor() {
        this.client = new Client()
            .setProject(conf.projectId)

        this.account = new Account(this.client);
    }

    async createAccount(email, password, name) {
        const promise = this.account.create(ID.unique(), email, password, name);

        promise.then(function (response) {
            console.log(response); // Success
            this.login(email, password);
        }, (error) => {
            console.log("problem at create :: ", error); // Failure
        });
    };
    async login(email, password) {
        const promise = this.account.createEmailPasswordSession(email, password);

        promise.then(function (response) {
            console.log(response); // Success
        }, (error) => {
            console.log("problem at login :: ", error); // Failure
        });
    };
    async getAccount() {
        const result = await this.account.get();
        // return result;
        result.then(function (response) {
            console.log(response); // Success
            return response
        }, (error) => {
            console.log("problem at get :: ", error); // Failure
        });
    };

    async logout() {
        const res = await this.account.deleteSession('current');

        res.then(function (response) {
            console.log(response, "loged out"); // Success
            return response
        }, (error) => {
            console.log("problem at logout :: ", error); // Failure
            return error
        });
    };

}





