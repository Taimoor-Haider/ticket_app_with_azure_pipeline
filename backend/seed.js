import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors"; // optional, for better console logs

import tickets from "./data/ticket.js";
import users from "./data/user.js";
import Ticket from "./models/ticket.js";
import User from "./models/user.js";
import connectDB from "./config/db.js";

dotenv.config();

const importData = async () => {
  try {
    await User.deleteMany({});
    await Ticket.deleteMany({});

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0];

    const sampleTickets = tickets.map((ticket) => ({
      ...ticket,
      user: adminUser._id,
    }));

    await Ticket.insertMany(sampleTickets);
    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany({});
    await Ticket.deleteMany({});
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error deleting data: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const run = async () => {
  try {
    await connectDB(); // ✅ Make sure the DB is connected
    const argument = process.argv[2];

    if (argument === "-d") {
      await deleteData();
    } else {
      await importData();
    }
  } catch (err) {
    console.error("Something went wrong while running the seeder script:", err);
    process.exit(1);
  }
};

run();
