import MemoItem from './MemoItem';

function MemoList({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  deleteMemo,
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onClickItem={() => {
            setSelectedMemoIndex(index);
          }}
          onClickDelete={() => {
            deleteMemo(index);
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
