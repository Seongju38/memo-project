import MemoItem from './MemoItem';

function MemoList({ memos, setSelectedMemoIndex }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          index={index}
          setSelectedMemoIndex={setSelectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}

export default MemoList;
