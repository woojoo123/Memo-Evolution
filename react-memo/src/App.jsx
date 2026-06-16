import { useState } from 'react'

import './App.css'

function App() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    function handleAddMemo() {
        console.log(title)
        console.log(content)
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
          <p id="empty-message" className="empty-message">아직 작성된 메모가 없습니다.</p>
          <div id="memo-container"></div>
        </div>
      </div>
  )
}

export default App
