import navIcon from "./nav.svg";
import userAvatar from "./user-avatar.svg";
import "./style.scss";

const Account = () => {
  return (
    <button className="account">
      <div className="account__nav-icon">
        <img src={navIcon} alt="Nav" />
      </div>
      <div className="account__avatar">
        <img src={userAvatar} alt="User avatar" />
      </div>
    </button>
  );
};

export default Account;
