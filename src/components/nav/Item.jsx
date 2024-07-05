function Item({ link, text }) {
  return (
    <a href={link} className="nav-list-items">
      <b>{text}</b>
    </a>
  );
}

export default Item;
