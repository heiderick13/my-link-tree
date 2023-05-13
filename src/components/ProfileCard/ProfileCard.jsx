import "./ProfileCard.css";

function Container({ img, alt }) {
  return (
    <div className="profile-card">
      <img
        className="h-40 w-40 rounded-full ring-2 ring-white"
        src={img}
        alt={alt}
      />
    </div>
  );
}

export default Container;
