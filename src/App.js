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

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
    </div>
  );
}

export default App;
