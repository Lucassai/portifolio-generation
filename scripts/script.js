/* console.log(nome);
 */
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let message = document.querySelector("#message");
let mapaGoogle = document.querySelector("#mapaGoogle");
let nameOk = false;
let emailOk = false;
let subjectOk = false;
let messageOk = false;

/* nome.style.width = "100%";
 */
function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (name.value.length < 3) {
    txtNome.innerHTML = "Nome Inválido*";
    txtNome.style.color = "red";
    txtNome.style.fontSize = "20px";
  } else {
    txtNome.innerHTML = "Nome Válido*";
    txtNome.style.color = "green";
    nameOk = true;
  }
}
function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail Inválido*";
    txtEmail.style.color = "red";
    txtEmail.style.fontSize = "20px";
  } else {
    txtEmail.innerHTML = "Email Válido*";
    txtEmail.style.color = "green";
    emailOk = true;
  }
}

function validaAssunto() {
  let txtSubjetc = document.querySelector("#txtSubject");
  if (subject.value.length >= 20) {
    txtSubjetc.innerHTML = "Texto deve ter menos de 20 caracteres";
    txtSubjetc.style.color = "red";
    txtSubjetc.style.fontSize = "20px";
    txtSubjetc.style.display = "block";
  } else {
    txtSubjetc.style.display = "none";
    subjectOk = true;
  }
}

function validaMensagem() {
  let txtMessage = document.querySelector("#txtMessage");
  if (message.value.length >= 200) {
    txtMessage.innerHTML = "Texto deve ter menos de 200 caracteres";
    txtMessage.style.color = "red";
    txtMessage.style.fontSize = "20px";
    txtMessage.style.display = "block";
  } else {
    txtMessage.style.display = "none";
    messageOk = true;
  }
}

function enviar() {
  if (
    nameOk == true &&
    emailOk == true &&
    subjectOk == true &&
    messageOk == true
  ) {
    alert("Formulário enviado com sucesso");
  } else {
    alert("Preencha o formulário corretamente");
  }
}
function mapaZoom() {
    addEventListener
mapaGoogle.style.width = "90%"
}
function mapaNormal() {
mapaGoogle.style.width = "50%"
}
