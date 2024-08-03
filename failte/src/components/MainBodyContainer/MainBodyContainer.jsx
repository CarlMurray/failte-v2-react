import SearchContainer from "../SearchContainer/SearchContainer";
import "./MainBodyContainer.scss";

export default function MainBodyContainer() {
  return (
    <div className="main-body-container">
      <SearchContainer />
      <div id="gmaps-container"></div>
    </div>
  );
}
