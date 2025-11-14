import "./style.scss";
import searchIcon from "./search.svg";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__btns-wrapper">
        <button className="searchbar__btn">Anywhere</button>
        <button className="searchbar__btn">Any week</button>
        <button className="searchbar__btn searchbar__btn--light">
          Add guests
        </button>
      </div>
      <button className="searchbar__btn-search">
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};
export default SearchBar;
