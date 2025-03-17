function MemoContainer() {
  return (
    <div className="MemoContainer">
      <div>
        <input type="text" className="MemoContainer__title"></input>
      </div>
      <div>
        <textarea className="MemoContainer__content" />
      </div>
    </div>
  );
}

export default MemoContainer;
