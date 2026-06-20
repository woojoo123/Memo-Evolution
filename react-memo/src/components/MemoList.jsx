import MemoItem from './MemoItem'

function MemoList({ memos, onEditMemo, onDeleteMemo }) {
    return (
        <div className="memo-list">
            <h2>메모 목록</h2>

            {memos.length === 0 && (
                <p className="empty-message">아직 작성된 메모가 없습니다.</p>
            )}

            {memos.map((memo) => (
                <MemoItem
                    key={memo.id}
                    memo={memo}
                    onEditMemo={onEditMemo}
                    onDeleteMemo={onDeleteMemo}
                />
            ))}
        </div>
    )
}

export default MemoList