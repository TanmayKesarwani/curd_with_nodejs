const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  const db1 = db.db("node_with_curd");
  const deleteQuery = { firstName: "shivank" };

  db1.collection("users").deleteMany(deleteQuery, function (error, result) {
    if (error) throw error;
    console.log("deleted Sucessfully: " + result.deletedCount);
    db.close();
  });
});
