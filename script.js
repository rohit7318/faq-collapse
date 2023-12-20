const toggleButtons = document.querySelectorAll(".faq-toggle");

toggleButtons.forEach(toggle=>{
    toggle.addEventListener("click",function(){
        toggle.parentNode.classList.toggle('active');
    })
})