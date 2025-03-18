import SideBarHeader from './SideBarHeader';
import MemoList from './MemoList';
import SideBarFooter from './SideBarFooter';

function SideBar({ memos, selectedMemoIndex, setSelectedMemoIndex }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
