const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, function (error, db) {
  if (error) throw error;
  const db1 = db.db("node_with_curd");
  const data = [
    { _id: 1, firstName: "tanmay", lastName: "kesarwani", age: 21 },
    { _id: 2, firstName: "vishal", lastName: "rawat", age: 24 },
    { _id: 3, firstName: "shivank", lastName: "srivastava", age: 26 },
    { _id: 4, firstName: "rishi", lastName: "mishra", age: 27 },
    { _id: 5, firstName: "reetesh", lastName: "kumar", age: 28 },
    { _id: 6, firstName: "ujjjwal", lastName: "jagatani", age: 29 },
  ];

  db1.collection("users").insertMany(data, function (error, result) {
    if (error) throw error;
    console.log("data insert sucessfully: " + result.insertedCount);
    db.close();
  });
});
