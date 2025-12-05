//prepinani kontaktu
const keySelect = document.getElementById("key-select");
const departmentSelect = document.getElementById("department-select");
const keyContactsGroup = document.getElementById("key-contacts-group");
const departmentContactsGroup = document.getElementById(
  "department-contacts-group"
);

if (departmentSelect) {
  departmentSelect.addEventListener("click", function () {
    keyContactsGroup.classList.add("hidden-group");
    departmentContactsGroup.classList.remove("hidden-group");
    keySelect.classList.remove("active-select");
    departmentSelect.classList.add("active-select");
  });

  keySelect.addEventListener("click", function () {
    keyContactsGroup.classList.remove("hidden-group");
    departmentContactsGroup.classList.add("hidden-group");
    departmentSelect.classList.remove("active-select");
    keySelect.classList.add("active-select");
  });
}
