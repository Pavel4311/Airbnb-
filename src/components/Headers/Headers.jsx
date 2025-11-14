import Logo from "../Logo/logo";
import SearchBar from "../SearchBar/SearchBar";
import Usermenu from "../User menu/Usermenu";
import "./style.scss";

const Header = () => {
  return (
    <header class="header">
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
  );
};
export default Header;
