function showMessage(){
document.getElementById("message").innerHTML =
"Sania Mirza proved that Indian women can dominate global sports. Her journey from Hyderabad to World No.1 is a story of determination, courage, and relentless hard work.";
}

const images=document.querySelectorAll(".gallery img");
const modal=document.getElementById("modal");
const modalImg=document.getElementById("modalImg");

images.forEach(img=>{
img.addEventListener("click",()=>{
modal.style.display="flex";
modalImg.src=img.src;
});
});

modal.addEventListener("click",()=>{
modal.style.display="none";
});
