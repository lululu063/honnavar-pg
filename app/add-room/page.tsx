export default function AddRoomPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Add New Room
      </h1>

      <form className="space-y-5 max-w-xl">
        <input
          type="text"
          placeholder="Room Title"
          className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        />

        <input
          type="number"
          placeholder="Rent"
          className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        />

        <textarea
          placeholder="Description"
          className="w-full p-3 rounded bg-gray-900 border border-gray-700"
        />

        <button className="bg-blue-600 px-6 py-3 rounded-lg">
          Add Room
        </button>
      </form>
    </main>
  );
}