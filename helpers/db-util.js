import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://hantran:5s1rGj0be8BPwFRu@cluster0.rsvwc.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, document, sort, filter = {}) {
  const db = client.db();
  const documents = await db
    .collection(document)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}
