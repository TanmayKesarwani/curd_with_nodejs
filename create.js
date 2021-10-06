const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "node_with_curd";

async function main() {
  await client.connect();
  console.log("Connected sucessfully");
  const db = client.db(dbName);
  const collection = db.collection("users");
  return "done";
}
main()
  .then(console.log)
  .catch(console.log)
  .finally(() => client.close());
