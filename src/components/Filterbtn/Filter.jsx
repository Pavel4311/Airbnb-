import "./style.scss";
import filterIcon from "./filters.svg";

const FilterBtn = () => {
  return (
    <button className="filter-btn">
      <img src={filterIcon} alt="" />
      Filters
    </button>
  );
};

export default FilterBtn;
