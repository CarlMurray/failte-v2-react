import "./AttractionActionButton.scss";

export default function AttractionActionButton({ url, phone, directions }) {
  let link = null;
  if (url) {
    link = url;
  } else if (phone) {
    link = phone;
  } else if (directions) {
    link = directions;
  }
  return (
    <a className="attraction-action-button-circle" href={link}>
      <img src="" />
    </a>
  );
}
