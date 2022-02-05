const banner_btn = document.querySelector('#banner_btn');
const sk_modal = document.querySelector('.sk_modal');
const modal_close = document.querySelector('.close');
const popup_close = document.querySelector('#popup_close');
const sk_popup = document.querySelector('.sk_popup');
const keepBtn = document.querySelector('.keepBtn');
const discardBtn = document.querySelector('.discardBtn');

banner_btn.addEventListener('click', function (){

    sk_modal.classList.add("active")

});

modal_close.addEventListener('click', function(){
    sk_popup.classList.add("popup_active")
});

sk_modal.addEventListener('click', function(e){
if(e.target==this){
    sk_modal.classList.remove("active")
}
});

keepBtn.addEventListener('click', function(){
     sk_popup.classList.remove("popup_active")
     sk_modal.classList.add("active")
});
discardBtn.addEventListener('click', function(){
    sk_popup.classList.remove("popup_active")
    sk_modal.classList.remove("active")
});

sk_popup.addEventListener('click',function(e){
    if(e.target==this){
        sk_popup.classList.remove("popup_active")
        sk_modal.classList.add("active")
    }
});
popup_close.addEventListener('click', function () {
    sk_popup.classList.remove("popup_active")
})


// this function for accordian

const accordian_header = document.querySelectorAll('.accordian_header');

accordian_header.forEach(data => {
    data.addEventListener('click',function(){

        accordian_header.forEach(item =>{
           
            if(item != this){
                 item.classList.remove('active')
                 item.nextElementSibling.style.height = '0px'
            }
            
        })

        data.classList.toggle('active')
       
        if(data.classList.contains('active')){
             data.nextElementSibling.style.height = data.nextElementSibling.scrollHeight +'px'
             
        }else{
             data.nextElementSibling.style.height = '0px'
        }
    })
})



