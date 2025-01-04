const conf = {
    appwriteUrl: String(import.meta.env.APPWRITE_ENDPOINT),
    projectId: String(import.meta.env.PROJ_ID),
    databaseId: String(import.meta.env.DATA_BASE_ID),
    collectionId: String(import.meta.env.COLLECTION_ID),
    bucketId: String(import.meta.env.BUCKET_ID),

}

export default conf;
