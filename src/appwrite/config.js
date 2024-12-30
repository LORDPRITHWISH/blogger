import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

class Service {
    constructor() {
        this.client = new Client().setProject(conf.projectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getPost(slug) {
        let result = this.databases.getDocument(conf.databaseId, conf.collectionId, slug)

        result.then(function (response) {
            console.log(response)
            return response
        }, (error) => {
            console.log("problem at getPost :: ", error)
        })
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        let result = this.databases.listDocuments(conf.databaseId, conf.collectionId, queries)

        result.then(function (response) {
            console.log(response)
            return response
        }, (error) => {
            console.log("problem at getPosts :: ", error)
        })
    }

    async createPost({ title, content, status = 'active', slug, logo, userId }) {

        let result = this.databases.createDocument(conf.databaseId, conf.collectionId, slug, {
            title,
            content,
            logo,
            userId,
            status,
        })

        result.then(function (response) {
            console.log(response)
            return response
        }, (error) => {
            console.log("problem at createPost :: ", error)
        })
    }

    async updatePost(slug, { title, content, status = 'active', logo }) {
        let result = this.databases.updateDocument(conf.databaseId, conf.collectionId, slug, {
            title,
            content,
            logo,
            status
        })

        result.then(function (response) {
            console.log(response)
            return response
        }, (error) => {
            console.log("problem at updatePost :: ", error)
        })
    }

    async deletePost(slug) {
        let result = this.databases.deleteDocument(conf.databaseId, conf.collectionId, slug)

        result.then(function (response) {
            console.log(response)
            // return response
        }, (error) => {
            console.log("problem at deletePost :: ", error)
        })
    }

    async uploadFile(file) {
        let result = this.bucket.createFile(conf.bucketId, ID.unique(), file)

        result.then(function (response) {
            console.log(response)
            return response
        }, (error) => {
            console.log("problem at uploadFile :: ", error)
        })
    }

    async deleteFile(fileId) {
        let result = this.bucket.deleteFile(conf.bucketId, fileId)

        result.then(function (response) {
            console.log(response)
            return response
        }, (error) => {
            console.log("problem at deleteFile :: ", error)
        })
    }

    async getPreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.bucketId, fileId);
        }
        catch (error) {
            console.log("problem at getPreview :: ", error)
        }
    }
}


