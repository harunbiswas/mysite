const { mongoUrl } = require("@/values");
const mongoose = require("mongoose");

if (!mongoUrl) {
  throw new Error("Please define the mongoUrl");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function DB() {
  if (cached.conn) {
    console.log("Database connected!");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // bufferCommands: false,
      // bufferMaxEntries: 0,
      // useFindAndModify: true,
      // useCreateIndex: true,
    };

    cached.promise = mongoose
      .connect(mongoUrl, opts)
      .then((mongoose) => {
        console.log("Database connected!");
        return mongoose;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}

module.exports = DB;
