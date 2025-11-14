import Account from "../Accoumt/account";
import Link from "../Link/Link";
import usermenuIcons from "./globe.svg";
import "./style.scss";
const Usermenu = () => {
  return (
    <div className="username">
      <div className="username_txt">Airbnb your home</div>
      <div className="username_icons">
        <Link icon={usermenuIcons} />
      </div>
      <div className="user-menu__user">
        <Account />
      </div>
    </div>
  );
};

export default Usermenu;
