import Categories from "../Categories/Categories";
import Logo from "../Logo/logo";
import SearchBar from "../SearchBar/SearchBar";
import Usermenu from "../User menu/Usermenu";
import "./style.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="container">
          <div className="header__row">
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__search">
              <SearchBar />
            </div>
            <div className="header__user">
              <Usermenu />
            </div>
          </div>
        </div>
      </header>
      <Categories />
    </div>
  );
};
export default Header;
