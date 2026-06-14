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

function deleteMemo(id) {
    const isConfirmed = confirm("정말 삭제하시겠습니까?");

    if (!isConfirmed) {
        return;
    }

    memos = memos.filter(function (item) {
        return item.id !== id;
    });
    saveMemos();
    renderMemos();
}

function editMemo(id) {
    const targetMemo = memos.find(function (item) {
        return item.id === id;
    });
    const newTitle = prompt("새 제목을 입력하세요", targetMemo.title.trim());
    const newContent = prompt("새 내용을 입력하세요", targetMemo.content.trim());

    if (newTitle === null  || newContent === null) {
        return;
    }

    if (newTitle.trim() === '' || newContent.trim() === '') {
        alert("제목과 내용을 모두 입력하세요.");
        return;
    }

    memos = memos.map(function (item) {
        if (item.id === id) {
            return {
                id: item.id,
                title: newTitle.trim(),
                content: newContent.trim()
            };
        }

        return item;
    });

    saveMemos();
    renderMemos();
}

function addMemo(title, content) {

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
            editMemo(memo.id);
        });

        deleteButton.addEventListener('click', function () {
            deleteMemo(memo.id);
        });

        memoContainer.appendChild(memoCard);

    });
    updateEmptyMessage();
}

addMemoButton.addEventListener('click', function () {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    addMemo(title, content);

    titleInput.value = '';
    contentInput.value = '';
});

loadMemos();
renderMemos();