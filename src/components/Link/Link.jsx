import "./style.scss";

const Link = ({ text, style, icon }) => {
  return (
    <a href="#" className={`link ${style === "light" ? "link--light" : ""}`}>
      {text}
      {icon && <img src={icon} alt="" />}
    </a>
  );
};

export default Link;
