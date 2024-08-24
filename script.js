let btn=document.querySelector(".btn");
let img=document.querySelector(".image");
let url="https://api.qrserver.com/v1/create-qr-code/?&data=";
let buffer=document.querySelector(".allbox");
async function Generator() {
    buffer.style.display="block";

    let input=document.querySelector(".main").value;
    let response=await fetch(url+input);
    let data=await response.blob();
    let image=URL.createObjectURL(data);
    img.setAttribute("src",image);
    img.style.display="block";

    buffer.style.display="none";
}
btn.addEventListener("click",Generator);