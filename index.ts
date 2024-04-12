let myModal = document.getElementById("myModal") as HTMLFormElement
let addNewTask = document.getElementById("addNewTask") as HTMLFormElement
let span = document.getElementsByClassName("close")[0] as HTMLFormElement;
let ul = document.getElementById("myUl")
let searchInput: HTMLInputElement | null = document.getElementById("searchInput") as HTMLInputElement
let i: number;
let myInput = document.getElementById("myInput") as HTMLInputElement
let themeToggle: HTMLButtonElement | null = document.getElementById("mode") as HTMLButtonElement

//Theme Change
let isDarkMode = false;
themeToggle.addEventListener("click",(event)=>{
    event.preventDefault()
    const body = document.body
    let popupTask = document.getElementById("modal-content") 
    if(popupTask)
    {if(isDarkMode){
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        popupTask.classList.add('light-theme')
        popupTask.classList.remove('dark-theme')
    }
    else{
        body.classList.add('dark-theme')
        body.classList.remove('light-theme')
        popupTask.classList.remove('light-theme')
        popupTask.classList.add('dark-theme')
    }}
    isDarkMode =!isDarkMode
})



// Add new Task
addNewTask.onclick = () => {
    myModal.style.display = "block"
}
span.onclick = function () {
    myModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}

// Searching in LI
if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let searchText = this.value.toLowerCase().trim()
        let listItems = Array.from(document.querySelectorAll("li"))
        listItems.forEach((li) => {
            let textContent = li.textContent?.toLowerCase()
            if (textContent?.includes(searchText))
                li.style.display = "block"
            else
                li.style.display = "none"
        })

    })
}
// Showing results of searchBar
let select: HTMLSelectElement | null = document.getElementById("selectTask") as HTMLSelectElement
if (select) {
    select.addEventListener("change", function () {
        let selectedValue: string = this.value
        let checkboxes: HTMLInputElement[] = Array.from(document.querySelectorAll("#myUl .checkbox"))
        checkboxes.forEach((element: HTMLInputElement) => {
            let liElement = element.parentElement
            if (liElement) {
                if (selectedValue === "all" || (selectedValue === "complete" && element.checked) || (selectedValue === "incomplete" && !element.checked)) {
                    liElement.style.display = "block"
                }
                else {
                    liElement.style.display = "none"
                }
            }
        })
    })
}


//To add new element
const newElement = () => {
    let removeImage = document.getElementById("removeId")
    let checkbox = document.createElement("input")
    let edit = document.createElement("button")
    let li = document.createElement("li")
    let hr = document.createElement("hr")
    let ul = document.getElementById("myUl") as HTMLDataElement
    let input = document.getElementById("myInput") as HTMLDataElement;
    removeImage?.parentElement?.removeChild(removeImage)
    if (input.value !== null) {
        let t = document.createTextNode(input.value);
        li.appendChild(checkbox)
        checkbox.setAttribute('type', "checkbox");
        checkbox.setAttribute('class', "checkbox");
        li.append(t)
        li.append(edit)
        edit.setAttribute('id', "edit");
        li.appendChild(hr)
        li.setAttribute("id" ,"myLi")
        ul.appendChild(li)
        input.value = ''
    }

    // Strike-Through the task if completed
    if (ul) {
        let listItems: HTMLElement[] = Array.from(ul.getElementsByTagName("li"))
        listItems.forEach((listItem: HTMLElement) => {
            let li_checkbox = listItem.querySelector("input")
            if (li_checkbox) {
                if (checkbox.checked)
                    listItem.style.textDecoration = "line-through"

                li_checkbox.addEventListener("change", function () {
                    if (this.checked)
                        listItem.style.textDecoration = "line-through"
                    else
                        listItem.style.textDecoration = "none"
                })
            }
        })
    }
edit.addEventListener("click",()=>{
        myModal.style.display = "block" 
        let h3Element = document.getElementById("heading") as HTMLHeadingElement

        h3Element.textContent = "Edit Note"
        let updatedTask = document.getElementById("myInput") as HTMLDataElement;
        let editLI = edit.closest("li")
        console.log(editLI?.textContent)
       
       if(editLI) {
        if(updatedTask.value !== null){
            editLI.textContent = updatedTask.value
        }}
        
        
})


}

myInput?.addEventListener("keydown", (event) => {

    if (event.key === "Enter")
        newElement()
    
})
let edit: HTMLButtonElement | null = document.getElementById("edit") as HTMLButtonElement


// Edit the task





