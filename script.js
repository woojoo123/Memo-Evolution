const titleInput = document.getElementById("memo-title");
const contentInput = document.getElementById("memo-content");
const addMemoButton = document.getElementById("add-memo-button");
const memoContainer = document.getElementById("memo-container");
const emptyMessage = document.getElementById("empty-message");

let memos = [];

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
            <button type="button">삭제</button>
        `;

        const deleteButton = memoCard.querySelector('button');

        deleteButton.addEventListener('click', function () {
            memos = memos.filter(function (item) {
                return item.id !== memo.id;
            });

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

    renderMemos();

    titleInput.value = '';
    contentInput.value = '';
});