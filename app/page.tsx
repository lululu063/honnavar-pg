"use client";

import { useEffect, useState } from "react";

export default function Home() {

  // FORM
  const [title, setTitle] = useState("");
  const [rent, setRent] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  // ROOMS
  const [rooms, setRooms] = useState<any[]>([]);

  // YOUTUBE
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=jfKfPfyJRdk"
  );

  // NOTES
  const [notes, setNotes] = useState("");

  // FETCH ROOMS
  const fetchRooms = async () => {

    try {

      const response =
        await fetch("/api/rooms");

      const data =
        await response.json();

      setRooms(data.rooms);

    } catch (error) {
      console.log(error);
    }
  };

  // LOAD PAGE
  useEffect(() => {
    fetchRooms();
  }, []);

  // LOAD NOTES
  useEffect(() => {

    const saved =
      localStorage.getItem("notes");

    if (saved) {
      setNotes(saved);
    }

  }, []);

  // SAVE NOTES
  useEffect(() => {

    localStorage.setItem(
      "notes",
      notes
    );

  }, [notes]);

  // ADD PG
  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    await fetch("/api/rooms", {

      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        title,
        rent,
        location,
        phone,
      }),
    });

    fetchRooms();

    setTitle("");
    setRent("");
    setLocation("");
    setPhone("");
  };

  return (
    <main className="
      min-h-screen
      bg-[#f5f7fb]
    ">

      {/* NAVBAR */}
      <nav className="
        bg-white
        shadow-md
        sticky top-0 z-50
      ">
        <div className="
          max-w-7xl mx-auto
          px-6 py-5
          flex items-center
          justify-between
        ">

          <h1 className="
            text-3xl font-black
            text-blue-600
          ">
            Honnavar PG
          </h1>

          <button className="
            bg-blue-600
            text-white
            px-6 py-3
            rounded-2xl
            font-bold
          ">
            Explore
          </button>
        </div>
      </nav>

      {/* RADIO */}
      <section className="
        max-w-7xl mx-auto
        px-6 py-16
      ">

        <h2 className="
          text-5xl font-black
          mb-10
          text-center
        ">
          🎵 Live Radio
        </h2>

        <div className="
          grid md:grid-cols-4
          gap-6
        ">

          {/* KANNADA */}
          <div className="
            bg-white
            rounded-[30px]
            p-6
            shadow-xl
          ">
            <h3 className="
              text-2xl font-bold
              mb-4
            ">
              Kannada FM
            </h3>

            <audio controls className="w-full">
              <source
                src="https://stream.zeno.fm/n4gzbe9ufzzuv"
                type="audio/mpeg"
              />
            </audio>
          </div>

          {/* HINDI */}
          <div className="
            bg-white
            rounded-[30px]
            p-6
            shadow-xl
          ">
            <h3 className="
              text-2xl font-bold
              mb-4
            ">
              Hindi FM
            </h3>

            <audio controls className="w-full">
              <source
                src="https://stream.zeno.fm/f3wvbbqmdg8uv"
                type="audio/mpeg"
              />
            </audio>
          </div>

          {/* ENGLISH */}
          <div className="
            bg-white
            rounded-[30px]
            p-6
            shadow-xl
          ">
            <h3 className="
              text-2xl font-bold
              mb-4
            ">
              English FM
            </h3>

            <audio controls className="w-full">
              <source
                src="https://stream.revma.ihrhls.com/zc561"
                type="audio/mpeg"
              />
            </audio>
          </div>

          {/* NEWS */}
          <div className="
            bg-white
            rounded-[30px]
            p-6
            shadow-xl
          ">
            <h3 className="
              text-2xl font-bold
              mb-4
            ">
              BBC News
            </h3>

            <audio controls className="w-full">
              <source
                src="https://stream.live.vc.bbcmedia.co.uk/bbc_world_service"
                type="audio/mpeg"
              />
            </audio>
          </div>

        </div>
      </section>

      {/* HERO */}
      <section className="
        max-w-4xl
        mx-auto
        px-6 py-10
        text-center
      ">

        <h1 className="
          text-6xl font-black
          leading-tight
          mb-8
        ">
          Find Your Perfect{" "}

          <span className="
            text-blue-600
          ">
            PG
          </span>
        </h1>

        <p className="
          text-xl text-gray-600
          mb-10
        ">
          PG listings + YouTube workspace +
          notes + live radio.
        </p>

        <div className="
          bg-white
          rounded-[30px]
          p-6
          shadow-xl
        ">

          <input
            type="text"
            placeholder="Search location..."
            className="
              w-full
              border
              rounded-2xl
              p-5
              outline-none
            "
          />

          <button className="
            w-full mt-5
            bg-blue-600
            text-white
            p-5
            rounded-2xl
            font-bold
          ">
            Search PG
          </button>
        </div>
      </section>

      {/* YOUTUBE */}
      <section className="
        max-w-5xl
        mx-auto
        px-6
        mb-20
      ">

        <div className="
          bg-gradient-to-br
          from-blue-500
          to-indigo-600
          rounded-[40px]
          p-6
          shadow-2xl
        ">

          <h2 className="
            text-4xl
            font-black
            text-white
            mb-6
            text-center
          ">
            🎥 YouTube Workspace
          </h2>

       {/* PLAYER */}
<div className="
  relative
  w-full
  overflow-hidden
  rounded-[30px]
  bg-black
  aspect-video
">

  <iframe
    className="
      absolute
      top-0
      left-0
      w-full
      h-full
    "
    src={`https://www.youtube.com/embed/${
      videoUrl
        .split("v=")[1]
        ?.split("&")[0]
    }`}
    title="YouTube video player"
    allow="
      accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture
    "
    allowFullScreen
  ></iframe>

</div>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Paste YouTube URL..."
            onChange={(e) => {

              let url = e.target.value;

              // SHORT LINK
              if (url.includes("youtu.be/")) {

                const id =
                  url.split("youtu.be/")[1]
                    ?.split("?")[0];

                url =
                  `https://www.youtube.com/watch?v=${id}`;
              }

              // SHORTS
              if (url.includes("/shorts/")) {

                const id =
                  url.split("/shorts/")[1]
                    ?.split("?")[0];

                url =
                  `https://www.youtube.com/watch?v=${id}`;
              }

              setVideoUrl(url);
            }}

            className="
              w-full
              mt-5
              rounded-2xl
              p-5
              outline-none
            "
          />

        </div>
      </section>

      {/* NOTES */}
      <section className="
        max-w-7xl mx-auto
        px-6 mb-20
      ">

        <div className="
          bg-white
          rounded-[40px]
          p-10
          shadow-xl
        ">

          <div className="
            flex items-center
            justify-between
            mb-6
          ">
            <h2 className="
              text-4xl font-black
            ">
              📝 Smart Notes
            </h2>

            <div className="
              text-green-600
              font-bold
            ">
              Autosaved
            </div>
          </div>

          <textarea
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            placeholder="
# Notes

• MongoDB concepts
• YouTube lecture notes
• Startup ideas
            "
            className="
              w-full
              min-h-[500px]
              border
              rounded-[30px]
              p-8
              outline-none
              resize-none
              text-lg
              leading-10
            "
          />
        </div>
      </section>

      {/* FORM */}
      <section className="
        max-w-7xl mx-auto
        px-6 mb-20
      ">

        <div className="
          bg-white
          rounded-[40px]
          p-10
          shadow-xl
        ">

          <h2 className="
            text-4xl font-black
            mb-10
          ">
            Post Your PG
          </h2>

          <form
            onSubmit={handleSubmit}
            className="
              grid md:grid-cols-2
              gap-6
            "
          >

            <input
              type="text"
              placeholder="PG Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="
                border
                rounded-2xl
                p-5 outline-none
              "
            />

            <input
              type="number"
              placeholder="Rent"
              value={rent}
              onChange={(e) =>
                setRent(e.target.value)
              }
              className="
                border
                rounded-2xl
                p-5 outline-none
              "
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
              className="
                border
                rounded-2xl
                p-5 outline-none
              "
            />

            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className="
                border
                rounded-2xl
                p-5 outline-none
              "
            />

            <button
              type="submit"
              className="
                md:col-span-2
                bg-blue-600
                text-white
                p-5 rounded-2xl
                font-bold
              "
            >
              Add PG Listing
            </button>
          </form>
        </div>
      </section>

      {/* PG LISTINGS */}
      <section className="
        max-w-7xl mx-auto
        px-6 pb-24
      ">

        <h2 className="
          text-5xl font-black
          mb-10
        ">
          Featured PGs
        </h2>

        <div className="
          grid md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {rooms.map((room) => (

            <div
              key={room._id}
              className="
                bg-white
                rounded-[35px]
                overflow-hidden
                shadow-xl
              "
            >

              <div className="
                h-64
                bg-gradient-to-br
                from-blue-500
                to-indigo-600
              " />

              <div className="p-8">

                <div className="
                  flex items-center
                  justify-between
                  mb-4
                ">
                  <h3 className="
                    text-2xl font-black
                  ">
                    {room.title}
                  </h3>

                  <div className="
                    text-green-600
                    font-black
                  ">
                    ₹{room.rent}
                  </div>
                </div>

                <p className="
                  text-gray-600
                  mb-6
                ">
                  📍 {room.location}
                </p>

                <a
                  href={`https://wa.me/91${room.phone}`}
                  target="_blank"
                  className="
                    block
                    text-center
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    p-5 rounded-2xl
                    font-bold
                  "
                >
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}