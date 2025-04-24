document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inputTarefa");
  const botaoAdd = document.querySelector(".add");
  const areaLista = document.getElementById("areaLista");

  function addTarefa() {
      const valor = input.value.trim();

      if (valor === "") {
          alert("Digite uma tarefa!");
          return;
      }

      const item = document.createElement("div");
      item.className = "item";

      const icone = document.createElement("div");
      icone.className = "item-icone";
      icone.innerHTML = '<i class="fa-regular fa-square"></i>';

      const nome = document.createElement("div");
      nome.className = "item-nome";
      nome.innerText = valor;

      const botao = document.createElement("div");
      botao.className = "item-botao";
      botao.innerHTML = '<button class="delete"><i class="fa-solid fa-trash"></i> Deletar</button>';

      item.appendChild(icone);
      item.appendChild(nome);
      item.appendChild(botao);
      areaLista.appendChild(item);
      input.value = "";

      icone.addEventListener("click", () => {
          const iconeI = icone.querySelector("i");
          if (iconeI.classList.contains("fa-square")) {
              iconeI.classList.remove("fa-regular", "fa-square");
              iconeI.classList.add("fa-solid", "fa-square-check");
              item.classList.add("clicado");
          } else {
              iconeI.classList.remove("fa-solid", "fa-square-check");
              iconeI.classList.add("fa-regular", "fa-square");
              item.classList.remove("clicado");
          }
      });

      botao.querySelector("button").addEventListener("click", () => {
          areaLista.removeChild(item);
      });
  }

  botaoAdd.addEventListener("click", addTarefa);

  input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
          addTarefa();
      }
  });
});
