function addDiv() {
  let div = document.createElement("div");
  div.textContent = "I live!";
  div.style.fontSize = "4em";

  document.body.append(div);
}

function peekaboo() {
  document.querySelector("h1").style.display = "block";
}

function goaway() {
  document.querySelector("h1").style.display = "none";
}
