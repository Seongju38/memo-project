function MemoItem({ children, onClick }) {
  return <div onClick={onClick}>{children}</div>;
}

export default MemoItem;
