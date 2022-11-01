const Menu = ({ onClick }) => {
  return (
    <div className="menu">
      <button className="Button" onClick={onClick}>
        Play Tetris
      </button>
    </div>
  );
};

export default Menu;
