import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

class Service {
    constructor() {
        this.client = new Client().setProject(conf.projectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(conf.databaseId, conf.collectionId, slug);
        }
        catch (error) {
            console.log("problem at getPost :: ", error)
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(conf.databaseId, conf.collectionId, queries);
        }
        catch (error) {
            console.log("problem at getPosts :: ", error)
        }

    }

    async createPost({ title, content, status = 'active', slug, featuredImage = '0_0', userId }) {

        // console.log(":: createPost ::\n ", '\ntitle:', title, '\ncontent:', content, '\nstatus:', status, '\nslug:', slug, '\nlogo:', logo, '\nuserId:', userId)

        try {
            let result = await this.databases.createDocument(conf.databaseId, conf.collectionId, slug, {
                title,
                content,
                logo: featuredImage,
                UserId: userId.toString(),
                status,

            })
            return result;
        }
        catch (error) {
            console.log("problem at createPost :: ", error)
        }

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
        try {
            return await this.bucket.createFile(conf.bucketId, ID.unique(), file);
        }
        catch (error) {
            console.log("problem at uploadFile :: ", error)
        }
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

    getPreview(fileId) {
        // console.log('-->',fileId)
        try {
            let val = this.bucket.getFilePreview(conf.bucketId, fileId);
            return val;
        }
        catch (error) {
            console.log("problem at getPreview :: ", error)
        }
    }
}


const service = new Service()
export default service


