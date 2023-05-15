import "./LinkCard.css";

function LinkCard({ icon, url, social }) {
  return (
    <a
      className="link-card w-full flex items-center p-2 rounded-lg"
      href={url}
      target="_blank"
    >
      <span>{icon}</span>
      <p className="text-center grow">{social}</p>
    </a>
  );
}

export default LinkCard;
