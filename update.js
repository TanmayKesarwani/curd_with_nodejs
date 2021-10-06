const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;

  const db1 = db.db("node_with_curd");
  const updateQuery = { firstName: "ujjjwal" };
  const updateValue = {
    $set: { firstName: "vipin", lastName: "nirala", age: 30 },
  };

  db1
    .collection("users")
    .updateOne(updateQuery, updateValue, function (error, result) {
      if (error) throw error;
      console.log("update sucessfully: " + result.matchedCount);
      db.close();
    });
});
