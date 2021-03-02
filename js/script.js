document.getElementById("botao").addEventListener("click", validaFormulario)

function validaFormulario() {

  if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
    alert("Prontinho, você receberá as novidades por email!")
  } else {
    alert("Ops, você deve preencher os campos Nome, Email e Telefone para prosseguir!")
  }
}