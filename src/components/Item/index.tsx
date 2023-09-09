const Item = ({ children, value }) => {
  return <li data-value={value}>{children}</li>;
};

export default Item;
