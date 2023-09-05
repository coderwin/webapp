/**
 *
 */
let idInputVal = document.querySelector("#exampleInputEmail1");
let loginModal = document.querySelector("#exampleModal");

loginModal.addEventListener("shown.bs.modal", function () {
    alert("Test");
    idInputVal.focus();
});