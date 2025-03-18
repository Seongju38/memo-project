import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  // 임시 메모 데이터
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'This is memo 1',
      createdAt: 1742218754918, // 시간 값
      updatedAt: 1742218754918, // 시간 값
    },
    {
      title: 'Memo 2',
      content: 'This is memo 2',
      createdAt: 1742218787046,
      updatedAt: 1742218787046,
    },
  ]);

  // 임시로 0번째 메모 데이터 선택
  const [selectedMemoIndex, setselectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    memos[selectedMemoIndex] = newMemo;

    console.log('memos', memos);

    setMemos([...memos]);
  };

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
