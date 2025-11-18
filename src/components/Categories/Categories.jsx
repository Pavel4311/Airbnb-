import CategoryItem from "../CategoryItem/CategoryItem";
import FilterBtn from "../Filterbtn/Filter";
import categoriesData from "./../../data/categories.json";
import "./style.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__row">
        <div className="categories__list">
          {categoriesData.map((cat, index) => (
            <CategoryItem title={cat.title} img={cat.img} key={index} />
          ))}
        </div>
        <div className="categories__filter">
          <CategoryItem />
          <FilterBtn />
        </div>
      </div>
    </div>
  );
};

export default Categories;
