import AttractionActionButton from "./AttractionActionButton/AttractionActionButton";
import "./SearchResultCard.scss";

export default function SearchResultCard({
  attractionHeading,
  attractionLocale,
  url,
  phone,
  directions,
}) {
  return (
    <div className="search-result-card">
      <h3 className="attraction-heading">{attractionHeading}</h3>
      <h4 className="attraction-locale">{attractionLocale}</h4>
      <div className="attraction-icon-button-container">
        <AttractionActionButton url={url} />
        <AttractionActionButton phone={phone} />
        <AttractionActionButton directions={directions} />
      </div>
    </div>
  );
}
