const titleInput = document.getElementById("memo-title");
const contentInput = document.getElementById("memo-content");
const addMemoButton = document.getElementById("add-memo-button");
const memoContainer = document.getElementById("memo-container");
const emptyMessage = document.getElementById("empty-message");


addMemoButton.addEventListener('click', function () {
    const title = titleInput.value;
    const content = contentInput.value;

    console.log('메모 추가 버튼 클릭');
    console.log(titleInput.value);
    console.log(contentInput.value);

    // 빈 값인지 검사
    if (title === '' || content === '') {
        alert('제목과 내용을 모두 입력하세요.');
        return;
    }

    // 새 메모 요소 만들기
    const memoCard = document.createElement('div');
    memoCard.className = 'memo-card';

    memoCard.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button type="button">삭제</button>
    `;

    memoContainer.appendChild(memoCard);

    emptyMessage.style.display = 'none';

    titleInput.value = '';
    contentInput.value = '';
})