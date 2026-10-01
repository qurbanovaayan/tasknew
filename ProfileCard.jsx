function ProfileCard({ image, name, surname, profession, bio }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <img
        src={image}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />

      <h2 className="text-2xl font-bold text-center mt-4">
        {name} {surname}
      </h2>

      <p className="text-purple-600 text-center mt-2 font-semibold">
        {profession}
      </p>

      <p className="text-gray-600 text-center mt-4">
        {bio}
      </p>

    </div>
  );
}

export default ProfileCard;