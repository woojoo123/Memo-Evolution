const titleInput = document.getElementById("memo-title");
const contentInput = document.getElementById("memo-content");
const addMemoButton = document.getElementById("add-memo-button");
const memoContainer = document.getElementById("memo-container");
const emptyMessage = document.getElementById("empty-message");

let memos = [];

function saveMemos() {
    localStorage.setItem('memos', JSON.stringify(memos));
}

function loadMemos() {
    const savedMemos = localStorage.getItem('memos');
    if (savedMemos !== null) {
        memos = JSON.parse(savedMemos);
    }
}

function updateEmptyMessage() {
    if (memos.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}

function renderMemos() {
    memoContainer.innerHTML = '';

    memos.forEach(function (memo) {
        const memoCard = document.createElement('div');
        memoCard.className = 'memo-card';

        memoCard.innerHTML = `
            <h3>${memo.title}</h3>
            <p>${memo.content}</p>
            <button class="edit-button" type="button">수정</button>
            <button class="delete-button" type="button">삭제</button>
        `;

        const editButton = memoCard.querySelector('.edit-button');
        const deleteButton = memoCard.querySelector('.delete-button');

        editButton.addEventListener('click', function () {
            const newTitle = prompt("새 제목을 입력하세요", memo.title);
            const newContent = prompt("새 내용을 입력하세요", memo.content);

            if (newTitle === null || newContent === null) {
                return;
            }

            if (newTitle=== '' || newContent === '') {
                alert("제목과 내용을 모두 입력하세요.");
                return;
            }

            memos = memos.map(function (item) {
                if (item.id === memo.id) {
                    return {
                        id: item.id,
                        title: newTitle,
                        content: newContent
                    };
                }

                return item;
            });

            saveMemos();
            renderMemos();
        });

        deleteButton.addEventListener('click', function () {
            memos = memos.filter(function (item) {
                return item.id !== memo.id;
            });
            saveMemos();
            renderMemos();
        });

        memoContainer.appendChild(memoCard);

    });
    updateEmptyMessage();
}

addMemoButton.addEventListener('click', function () {
    const title = titleInput.value;
    const content = contentInput.value;

    // 빈 값인지 검사
    if (title === '' || content === '') {
        alert('제목과 내용을 모두 입력하세요.');
        return;
    }

    const newMemo = {
        id: Date.now(),
        title: title,
        content: content
    };

    memos.push(newMemo);
    saveMemos();
    renderMemos();

    titleInput.value = '';
    contentInput.value = '';
});

loadMemos();
renderMemos();