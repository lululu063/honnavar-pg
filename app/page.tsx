"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [rent, setRent] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const [rooms, setRooms] = useState<any[]>([]);

  // Fetch rooms
  const fetchRooms = async () => {
    try {
      const response = await fetch("/api/rooms");

      const data = await response.json();

      setRooms(data.rooms);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Submit room
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!title || !rent || !location || !phone) {
      alert("Please fill all fields");
      return;
    }

    await fetch("/api/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        rent,
        location,
        phone,
      }),
    });

    alert("Room Added Successfully!");

    // Clear form
    setTitle("");
    setRent("");
    setLocation("");
    setPhone("");

    // Reload listings
    fetchRooms();
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-lg mb-10">
          <h1 className="text-4xl font-bold mb-3">
            Honnavar PG Finder
          </h1>

          <p className="text-lg opacity-90">
            Find affordable PGs and rental rooms in Honnavar.
          </p>
        </div>

        {/* RADIO PLAYER */}
        <div className="bg-white p-6 rounded-3xl shadow-md mb-10">
          <h2 className="text-2xl font-bold mb-4">
            📻 Live Radio / News
          </h2>

          <p className="text-gray-600 mb-4">
            Listen while browsing PG listings
          </p>

          <audio
            controls
            className="w-full"
          >
            <source
              src="https://stream.live.vc.bbcmedia.co.uk/bbc_world_service"
              type="audio/mpeg"
            />

            Your browser does not support audio.
          </audio>
        </div>

        {/* FORM SECTION */}
        <div className="bg-white p-6 rounded-3xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-5">
            Add New PG Listing
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 md:grid-cols-2"
          >
            <input
              type="text"
              placeholder="PG / Room Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Monthly Rent"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              className="border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-semibold transition duration-300 md:col-span-2"
            >
              Add Listing
            </button>
          </form>
        </div>

        {/* LISTINGS */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Available PG Listings
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room._id}
                className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >

                {/* IMAGE PLACEHOLDER */}
                <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-bold">
                  PG ROOM
                </div>

                <div className="p-5">
                  <h3 className="text-2xl font-bold mb-2">
                    {room.title}
                  </h3>

                  <p className="text-gray-600 mb-2">
                    📍 {room.location}
                  </p>

                  <p className="text-xl font-semibold text-green-600 mb-4">
                    ₹ {room.rent} / month
                  </p>

                  {/* WHATSAPP BUTTON */}
                  <a
                    href={`https://wa.me/91${room.phone}`}
                    target="_blank"
                    className="block text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition duration-300"
                  >
                    Contact on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}