import SideBarHeader from './SideBarHeader';
import MemoList from './MemoList';
import SideBarFooter from './SideBarFooter';

function SideBar({ memos, setSelectedMemoIndex }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList memos={memos} setSelectedMemoIndex={setSelectedMemoIndex} />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
