import "./AttractionActionButton.scss";
import { DirectionsIcon, PhoneIcon, LinkIcon } from "../../Icons/Icons";
import { useState } from "react";

export default function AttractionActionButton({ url, phone, directions }) {
  const [hovered, setHovered] = useState(false);

  let link = null;
  let icon = null;
  if (url) {
    link = url;
    icon = <LinkIcon />;
  } else if (phone) {
    link = phone;
    icon = <PhoneIcon />;
  } else if (directions) {
    link = directions;
    icon = <DirectionsIcon />;
  }
  return (
    <a
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={
        hovered
          ? "hovered attraction-action-button-circle"
          : "attraction-action-button-circle"
      }
      href={link}
    >
      {icon}
    </a>
  );
}
