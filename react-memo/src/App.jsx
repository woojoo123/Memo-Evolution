import { useState, useEffect } from 'react'
import MemoForm from './components/MemoForm'
import MemoList from './components/MemoList'
import './App.css'

import './App.css'

function App() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [memos, setMemos] = useState([])

    useEffect(() => {
        const savedMemos = localStorage.getItem('memos')

        if (savedMemos !== null) {
            setMemos(JSON.parse(savedMemos))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('memos', JSON.stringify(memos))
    }, [memos])

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

    function handleEditMemo(id) {
        const targetMemo = memos.find((memo) => {
            return memo.id === id
        })

        const newTitle = prompt('새 제목을 입력하세요', targetMemo.title)
        const newContent = prompt('새 내용을 입력하세요', targetMemo.content)

        if (newTitle === null || newContent === null) {
            return
        }

        if (newTitle.trim() === '' || newContent.trim() === '') {
            alert('제목과 내용을 모두 입력하세요.')
            return
        }

        const nextMemos = memos.map((memo) => {
            if (memo.id === id) {
                return {
                    id: memo.id,
                    title: newTitle.trim(),
                    content: newContent.trim(),
                }
            }

            return memo
        })

        setMemos(nextMemos)
    }

  return (
      <div className="app">
          <MemoForm
              title={title}
              content={content}
              onTitleChange={(event) => setTitle(event.target.value)}
              onContentChange={(event) => setTitle(event.target.value)}
              ondAddMemo={handleAddMemo}
          />

          <MemoList
              memos={memos}
              onEditMemo={handleEditMemo}
              onDeleteMemo={handleDeleteMemo}
          />
      </div>
  )
}

export default App
