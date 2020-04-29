const btnLogin = document.getElementById("send");
const message = document.querySelector(".btn-login");


var data = [
    {
        username: "mm",
        password: "mm"
    },
    {
        username: "dd",
        password: "dd"
    },
    {
        username: "user",
        password: "user"
    },
    
];

btnLogin.addEventListener("click", login);
function login(){

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var msg = document.createElement("p");
            msg.className = "message";
            message.appendChild(msg);
    for(let i = 0; i < data.length; i++){
       if(username == data[i].username && password == data[i].password){
           window.open('utb.html', "_self");
        }else{
            msg.innerText = username + " is Incorect!" ;
            
        }
   };
   
}