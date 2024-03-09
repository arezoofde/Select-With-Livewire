let runyValueInput = document.querySelector(".runy-value-input");
let runyMenuSelect = document.querySelector(".runy-menu-select");
let runySelectItemList = document.querySelector(".runy-select-item");
let runySelectItem = document.querySelectorAll(".runy-select-item li");
let Selected = document.querySelector(".selected");

function toggleDropdown() {
    runyMenuSelect.classList.toggle("show")
}


runyValueInput.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDropdown()

})

window.addEventListener("click", function () {
    if (runyMenuSelect.classList.toggle("show")) {
        toggleDropdown();
    }
})

runySelectItem.forEach(function (openListSingle) {
    openListSingle.addEventListener("click", function () {
        let Value = document.querySelector(".soValue");
        let text = this.textContent;
        Value.value = this.getAttribute('value');
        Selected.value = text;
      
        //برای لایووایر
        Livewire.emit('userSelected', Value.value);
    });
});
Selected.addEventListener('keyup', function () {
    let liText, TextValue;
    let filter = Selected.value
    liText = runySelectItemList.getElementsByTagName("li")
    for (let i = 0; i < liText.length; i++) {
        licount = liText[i];
        TextValue = licount.textContent.toLowerCase() || licount.innerText;
        if (TextValue.indexOf(filter) > -1) {
            liText[i].style.display = ''
        } else {
            liText[i].style.display = 'none'
        }
    }
})

