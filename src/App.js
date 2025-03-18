import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';
import { setItem } from './lib/storage';

function App() {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem('memo')) || [],
  );

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    setMemos(newMemos);
    //localStorage.setItem('memo', JSON.stringify(newMemos));
    setItem('memo', newMemos);
  };

  const addMemo = () => {
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
    //localStorage.setItem('memo', JSON.stringify(newMemos));
    setItem('memo', newMemos);
  };

  const deleteMemo = (index) => {
    const newMemos = [...memos];

    newMemos.splice(index, 1);

    setMemos(newMemos);
    if (index === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    }
  };

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
