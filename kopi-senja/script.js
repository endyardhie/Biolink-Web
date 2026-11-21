var toastTimer;
function notify(message){var toast=document.getElementById('toast');toast.textContent=message;toast.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(function(){toast.hidden=true;},3500);}
async function copyText(text,message){try{await navigator.clipboard.writeText(text);notify(message);}catch(error){window.prompt('Salin teks berikut:',text);}}
document.getElementById('couponButton').addEventListener('click',function(){copyText('SENJA10','Kode SENJA10 berhasil disalin!');});
var menu=document.getElementById('menuDialog');
document.getElementById('menuButton').addEventListener('click',function(){menu.showModal();});
document.getElementById('closeMenu').addEventListener('click',function(){menu.close();});
menu.addEventListener('click',function(event){var rect=menu.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom){menu.close();}});
