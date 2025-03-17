import SideBarHeader from './SideBarHeader';
import MemoList from './MemoList';
import SideBarFooter from './SideBarFooter';

function SideBar({ memos }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList memos={memos} />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
