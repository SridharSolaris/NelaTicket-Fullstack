import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function bookticket(
  data,
  mve_id,
  email,
  ticket_price,
  movie_name
) {
  return await client
    .db("bookmyshow")
    .collection("bookings")
    .insertOne({
      ...data,
      mve_id: mve_id,
      email: email,
      ticket_price: ticket_price,
      mve_name: movie_name,
    });
}

export async function getPrice(theatre_name, show_name) {
  // console.log("Function result :" + theatre_name, show_name);
  return await client
    .db("bookmyshow")
    .collection("shows")
    .findOne(
      {
        $and: [{ theatre_name: theatre_name }, { show_name: show_name }],
      },
      {
        projection: {
          _id: 0,
          ticket_price: 1,
        },
      }
    );
}

export async function getAllBookings() {
  return await client
    .db("bookmyshow")
    .collection("bookings")
    .find({})
    .toArray();
}

export async function getBookingsByEmail(email) {
  return await client
    .db("bookmyshow")
    .collection("bookings")
    .find({ email: email })
    .toArray();
}

export async function getBookingById(bookingId) {
  return await client
    .db("bookmyshow")
    .collection("bookings")
    .findOne(
      { _id: new ObjectId(bookingId) },
    )
}