var myModal = document.getElementById("myModal");
var addNewTask = document.getElementById("addNewTask");
var span = document.getElementsByClassName("close")[0];
var ul = document.getElementById("myUl");
var searchInput = document.getElementById("searchInput");
var i;
var myInput = document.getElementById("myInput");
var themeToggle = document.getElementById("mode");
//Theme Change
var isDarkMode = false;
themeToggle.addEventListener("click", function (event) {
    event.preventDefault();
    var body = document.body;
    var popupTask = document.getElementById("modal-content");
    if (popupTask) {
        if (isDarkMode) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            popupTask.classList.add('light-theme');
            popupTask.classList.remove('dark-theme');
        }
        else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            popupTask.classList.remove('light-theme');
            popupTask.classList.add('dark-theme');
        }
    }
    isDarkMode = !isDarkMode;
});
// Add new Task
addNewTask.onclick = function () {
    myModal.style.display = "block";
};
span.onclick = function () {
    myModal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
};
// Searching in LI
if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        var searchText = this.value.toLowerCase().trim();
        var listItems = Array.from(document.querySelectorAll("li"));
        listItems.forEach(function (li) {
            var _a;
            var textContent = (_a = li.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (textContent === null || textContent === void 0 ? void 0 : textContent.includes(searchText))
                li.style.display = "block";
            else
                li.style.display = "none";
        });
    });
}
// Showing results of searchBar
var select = document.getElementById("selectTask");
if (select) {
    select.addEventListener("change", function () {
        var selectedValue = this.value;
        var checkboxes = Array.from(document.querySelectorAll("#myUl .checkbox"));
        checkboxes.forEach(function (element) {
            var liElement = element.parentElement;
            if (liElement) {
                if (selectedValue === "all" || (selectedValue === "complete" && element.checked) || (selectedValue === "incomplete" && !element.checked)) {
                    liElement.style.display = "block";
                }
                else {
                    liElement.style.display = "none";
                }
            }
        });
    });
}
//To add new element
var newElement = function () {
    var _a;
    var removeImage = document.getElementById("removeId");
    var checkbox = document.createElement("input");
    var edit = document.createElement("button");
    var li = document.createElement("li");
    var hr = document.createElement("hr");
    var ul = document.getElementById("myUl");
    var input = document.getElementById("myInput");
    (_a = removeImage === null || removeImage === void 0 ? void 0 : removeImage.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(removeImage);
    if (input.value !== null) {
        var t = document.createTextNode(input.value);
        li.appendChild(checkbox);
        checkbox.setAttribute('type', "checkbox");
        checkbox.setAttribute('class', "checkbox");
        li.append(t);
        li.append(edit);
        edit.setAttribute('id', "edit");
        li.appendChild(hr);
        li.setAttribute("id", "myLi");
        ul.appendChild(li);
        input.value = '';
    }
    // Strike-Through the task if completed
    if (ul) {
        var listItems = Array.from(ul.getElementsByTagName("li"));
        listItems.forEach(function (listItem) {
            var li_checkbox = listItem.querySelector("input");
            if (li_checkbox) {
                if (checkbox.checked)
                    listItem.style.textDecoration = "line-through";
                li_checkbox.addEventListener("change", function () {
                    if (this.checked)
                        listItem.style.textDecoration = "line-through";
                    else
                        listItem.style.textDecoration = "none";
                });
            }
        });
    }
    edit.addEventListener("click", function () {
        myModal.style.display = "block";
        var h3Element = document.getElementById("heading");
        h3Element.textContent = "Edit Note";
        var updatedTask = document.getElementById("myInput");
        var editLI = edit.closest("li");
        console.log(editLI === null || editLI === void 0 ? void 0 : editLI.textContent);
        if (editLI) {
            if (updatedTask.value !== null) {
                editLI.textContent = updatedTask.value;
            }
        }
    });
};
myInput === null || myInput === void 0 ? void 0 : myInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter")
        newElement();
});
var edit = document.getElementById("edit");
// Edit the task
