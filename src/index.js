document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    buildToDo(e.target.text_input.value);
    form.reset();
  });
});

function buildToDo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener("click", toDoDelete);
  btn.textContent = "x";
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.querySelector("#tasks").appendChild(p);
}

function toDoDelete(e) {
  e.target.parentNode.remove();
}
