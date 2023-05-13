import "./ProfileCard.css";

function Container({ img, alt }) {
  return (
    <div className="profile-card">
      <img className="rounded-full" src={img} alt={alt} />
    </div>
  );
}

export default Container;
