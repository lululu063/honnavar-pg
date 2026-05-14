import Image from "next/image";
import Link from "next/link";

type RoomCardProps = {
  id: number;
  title: string;
  rent: number;
  location: string;
  image: string;
};

export default function RoomCard({
  id,
  title,
  rent,
  location,
  image,
}: RoomCardProps) {
  return (
    <Link href={`/room/${id}`}>
      <div className="border border-gray-700 rounded-xl p-5 bg-gray-900 hover:scale-105 transition cursor-pointer">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg w-full h-52 object-cover mb-4"
        />

        <h2 className="text-2xl font-semibold">
          {title}
        </h2>

        <p className="mt-2 text-gray-400">
          Location: {location}
        </p>

        <p className="mt-2 text-green-400 font-bold">
          ₹{rent}/month
        </p>

        <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
          Contact Owner
        </button>
      </div>
    </Link>
  );
}