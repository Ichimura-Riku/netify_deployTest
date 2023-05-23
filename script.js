document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // フォームのデフォルトの動作をキャンセル

    var nameInput = document.getElementById("name");
    var name = nameInput.value.trim(); // 入力値を取得し、前後の空白をトリム

    if (name !== "") {
        addUser(name);
        nameInput.value = ""; // 入力フィールドをクリア
    }
});

function addUser(name) {
    var userList = document.getElementById("users");
    var listItem = document.createElement("li");
    listItem.textContent = name;
    userList.appendChild(listItem);
}
