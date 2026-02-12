export default function Profilecard({ person }) {
  return (
    <div className="card">

      <div className="image-container">
        <img
          src={person.image.src}
          alt={person.image.alt}
          className="profile-image"
        />
      </div>

      <h2 className="name">{person.name}</h2>

      <p className="class">{person.class}</p>

      <p className="hobbies">
        {person.hobbies.join(", ")}
      </p>

    </div>
  );
}
