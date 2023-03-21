function sendMail(e){
    event.preventDefault();
    console.log(document.getElementById('name').value)
    console.log(document.getElementById('email').value)
    console.log(document.getElementById('msg').value)
    console.log(document.getElementById('subject').value)
    let loading=document.querySelector('.loading');


var params={
        
    from_name:document.getElementById('name').value,
    email: document.getElementById('email').value,
    msg: document.getElementById('msg').value,
    subject:document.getElementById('subject').value
    
    
}
emailjs.send("service_0tjxui4","template_8fz3g6u",params).then(function(res){
alert("Sucsessfully Message send"/*+res.status*/)})



}







































// function sendmail(){
//     var params = {
//        name: document.getElementById("name").value,
//        email: document.getElementById("email").value,
//        message:document.getElementById("message").value,

//    }; 

//    const serviceID = "service_0tjxui4";
//    const templateID ="template_8fz3g6u";

// emailjs
// .send(serviceID, templateID,params)
// .then( res =>{
//    document.getElementById("name").value= "";
//    document.getElementById("email").value= "";
//   document.getElementById("message").value= "";
//    console.log(res);
// alert("Your Response sent  Successfully");
// } )
// .catch((err)=>console.log(err));
// }