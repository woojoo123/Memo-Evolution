function MemoForm({ title, content, onTitleChange, onContentChange, onAddMemo}) {
    return (
        <div className="memo-form">
            <h2>새 메모 작성</h2>

            <label htmlFor="memo-title">제목</label>
            <input
                id="memo-title"
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={onTitleChange}
            />

            <label htmlFor="memo-content">내용</label>
            <textarea
                id="memo-content"
                placeholder="내용을 입력하세요"
                value={content}
                onChange={onContentChange}
            ></textarea>

            <button type="button" onClick={onAddMemo}>메모 추가</button>
        </div>
    )
}

export default MemoForm