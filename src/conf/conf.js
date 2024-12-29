const conf = {
    appwriteUrl: String(process.env.APPWRITE_ENDPOINT),
    projectId: String(process.env.PROJ_ID),
    databaseId: String(process.env.DATA_BASE_ID),
    collectionId: String(process.env.COLLECTION_ID),
    bucketId: String(process.env.BUCKET_ID),

}

export default conf;
