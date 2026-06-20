function MemoItem({ memo, onEditMemo, onDeleteMemo }) {
    return (
        <div className="memo-card">
            <h3>{memo.title}</h3>
            <p>{memo.content}</p>

            <button type="button" onClick={() => onEditMemo(memo.id)}>
                수정
            </button>

            <button type="button" onClick={() => onDeleteMemo(memo.id)}>
                삭제
            </button>
        </div>
    )
}

export default MemoItem