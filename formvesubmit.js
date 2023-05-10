
userformDOM = document.querySelector("#userform")
// formu adresini bağladık
userformDOM.addEventListener("submit", formHandler);
// forma submit elementini ekledik ve function adını bağladık
function formHandler (event){
  event.preventDefault();
  // sayfanın yenilenmesini engelledik
  username = document.querySelector("#username")
  gmail = document.querySelector("#mail")
  adres = document.querySelector("#adres")
  // username gmail ve adres bilgilerini bağladık
addIem(username.value, gmail.value, adres.value)
// alltaki functionu bağladık
}

function addIem (user_name, gmaill, adress){
  userlistDOM = document.querySelector("#userList")
  // liste adresini bağladık
  liDOM = document.createElement("li")  
  // yeni bir li ekledik 
  liDOM.innerHTML = `${user_name}, ${gmaill}, ${adress}`
  // listenin sayfaya yazılmasını sağladık
  liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
  userlistDOM.append(liDOM)
  //  li yapısını listeye ekledik
  
}
