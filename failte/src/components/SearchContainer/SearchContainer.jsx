import SearchInput from "./SearchInput/SearchInput";
import "./SearchContainer.scss";
import SearchResultCard from "./SearchResultCard/SearchResultCard";
import testData from "../../data/testData";

export default function SearchContainer() {
  return (
    <div className="search-container">
      {testData.map((item, index) => (
        <SearchResultCard
          key={index}
          attractionHeading={item.attractionHeading}
          attractionLocale={item.attractionLocale}
          url={item.url}
          phone={item.phone}
          directions={item.directions}
        />
      ))}
    </div>
  );
}
