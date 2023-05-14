import "./LinkCard.css";

function LinkCard({ icon, iconAlt, url, social }) {
  return (
    <div>
      <a className="flex" href={url} target="_blank">
        <img src={icon} alt={iconAlt} />
        <p>{social}</p>
      </a>
    </div>
  );
}

export default LinkCard;
