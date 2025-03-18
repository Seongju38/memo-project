import { useState, useCallback } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { setItem, getItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debouncedSetItem = debounce(setItem, 5000);

function App() {
  const [memos, setMemos] = useState(getItem('memos') || []);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = useCallback(
    (newMemo) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos[selectedMemoIndex] = newMemo;
        debouncedSetItem('memo', newMemos);

        return newMemos;
      });
    },
    [selectedMemoIndex],
  );

  const addMemo = useCallback(() => {
    const now = new Date().getTime();

    const newMemos = [
      ...memos,
      {
        title: 'Untitled',
        content: '',
        createdAt: now,
        updatedAt: now,
      },
    ];

    setMemos(newMemos);
    setSelectedMemoIndex(memos.length);
    debouncedSetItem('memo', newMemos);
  }, [memos]); // memos.length를 사용하기에 setMemos의 state를 가져온다고 해도 dependency에서 빠질 수 없음

  const deleteMemo = useCallback(
    (index) => {
      setMemos((memos) => {
        const newMemos = [...memos];

        newMemos.splice(index, 1);
        debouncedSetItem('memo', newMemos);

        return newMemos;
      });
      if (index === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      }
    },
    [selectedMemoIndex],
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        addMemo={addMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
