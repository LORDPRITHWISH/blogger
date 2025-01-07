const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    projectId: String(import.meta.env.VITE_PROJ_ID),
    databaseId: String(import.meta.env.VITE_DATA_BASE_ID),
    collectionId: String(import.meta.env.VITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_BUCKET_ID),
}

// console.log(import.meta.env.PROJ_ID);
// console.log(import.meta.env);


export default conf;
