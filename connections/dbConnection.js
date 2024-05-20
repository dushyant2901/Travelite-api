const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const Destination = require("../models/Destination");
const app = express();
const PORT = process.env.PORT || 3000;
const dbURI =
  "mongodb+srv://showsmoviepedia:93Z3jGHk0FfueCTI@cluster0.tzdtqsf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const makeConnection = async () => {
  await mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

// const jsonData = fs.readFileSync("data.json", "utf8");
// const resData = JSON.parse(jsonData);
// console.log("resData", resData);

// const seedDatabase = async () => {
//   try {
//     for (const data of resData) {
//       const newDestination = new Destination({
//         name: data.name,
//         location: data.location,
//         description: data.description,
//         rating: data.rating,

//         reviews: data.reviews,
//       });

//       await newDestination.save();
//       console.log(`Destination "${newDestination.name}" seeded.`);
//     }
//     console.log("Database seeding complete.");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     mongoose.disconnect();
//   }
// };
// seedDatabase();
module.exports = { makeConnection };
