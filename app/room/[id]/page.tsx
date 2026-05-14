"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [rent, setRent] = useState("");
  const [location, setLocation] = useState("");

  const [rooms, setRooms] = useState<any[]>([]);

  // Fetch rooms from database
  const fetchRooms = async () => {
    const response = await fetch("/api/rooms");

    const data = await response.json();

    setRooms(data.rooms);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        rent,
        location,
      }),
    });

    alert("Room Added!");

    setTitle("");
    setRent("");
    setLocation("");

    fetchRooms();
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Honnavar PG Listings
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mb-10"
      >
        <input
          type="text"
          placeholder="Room Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded"
        />

        <input
          type="number"
          placeholder="Rent"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          className="border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-black text-white p-3 rounded"
        >
          Add Room
        </button>
      </form>

      {/* ROOM LISTINGS */}
      <div className="grid gap-4">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="border p-4 rounded"
          >
            <h2 className="text-xl font-bold">
              {room.title}
            </h2>

            <p>Rent: ₹{room.rent}</p>

            <p>Location: {room.location}</p>
          </div>
        ))}
      </div>
    </main>
  );
}