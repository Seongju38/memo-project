function MemoItem({ children, onClick, isSelected }) {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClick}
    >
      {children}
      <button className="MemoItem__delete-button">X</button>
    </div>
  );
}

export default MemoItem;
