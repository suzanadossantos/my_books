function login(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('e-mail').value;
    var senha = document.getElementById('password').value;

    //Verificar todas as informações
    if(nome != "" &&  email != "" && senha != ""){
        location.href = "books.html";
    }else{
        alert("Verifique suas informações!");
    }
}