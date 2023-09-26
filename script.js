const inputBox = document.querySelector("#inputbox");
const taskContainer = document.querySelector(".taskcontainer");

const button = document.querySelector(".addtask");

button.addEventListener("click", () => {
  if (inputBox.value == "") {
    alert("Please Write Your Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  storedData();
});

taskContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      storedData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      storedData();
    }
  },
  false
);

function storedData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}

function showData() {
  taskContainer.innerHTML = localStorage.getItem("data");
}

showData();
