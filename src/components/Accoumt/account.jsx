import userAvatar from "./user-avatar.svg";
import "./style.scss";
import Menu from "../Menu/Menu";

const Account = () => {
  return (
    <button className="account">
      <div className="account__nav-icon">
        <div>
          <span className="account__nav-icon-name">John Doe</span>
        </div>
        <Menu />
      </div>
      <div className="account__avatar">
        <img src={userAvatar} alt="User avatar" />
      </div>
    </button>
  );
};

export default Account;
