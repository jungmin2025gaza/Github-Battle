import "./styles.css";

export default function NavButton(props) {
  const { isActive, text, onClick } = props;
  return (
    <button
      className={`nav-button ${isActive ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </button>
  );
}
