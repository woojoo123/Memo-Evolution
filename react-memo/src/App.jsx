import { useState } from 'react'

import './App.css'

function App() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [memos, setMemos] = useState([])

    function handleAddMemo() {
        const trimmedTitle = title.trim()
        const trimmedContent = content.trim()

        if (trimmedTitle === '' || trimmedContent === '') {
            alert('제목과 내용을 모두 입력하세요.')
            return
        }

        const newMemo = {
            id: Date.now(),
            title: title,
            content: content,
        }

        setMemos([...memos, newMemo])
        setTitle('')
        setContent('')
    }

    function handleDeleteMemo(id) {
        const isConfirmed = confirm('정말 삭제하시겠습니까?')

        if (!isConfirmed) {
            return
        }

        const nextMemos = memos.filter((memo) => {
            return memo.id !== id
        })

        setMemos(nextMemos)
    }

  return (
      <div className="app">
        <div className="memo-form">
          <h2>새 메모 작성</h2>

          <label htmlFor="memo-title">제목</label>
          <input
              id="memo-title"
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
          />

          <label htmlFor="memo-content">내용</label>
          <textarea
              id="memo-content"
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(event) => setContent(event.target.value)}
          ></textarea>

          <button type="button" onClick={handleAddMemo}>메모 추가</button>
        </div>
          <div className="memo-list">
              <h2>메모 목록</h2>

              {memos.length === 0 && (
                  <p className="empty-message">아직 작성된 메모가 없습니다.</p>
              )}

              {memos.map((memo) => (
                  <div className="memo-card" key={memo.id}>
                      <h3>{memo.title}</h3>
                      <p>{memo.content}</p>
                      <button type="button" onClick={() => handleDeleteMemo(memo.id)}>
                          삭제
                      </button>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default App
