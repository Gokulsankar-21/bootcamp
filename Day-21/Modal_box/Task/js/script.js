window.onload=function(){
    const btnopen=document.querySelector('.open');
    const btnclose=document.querySelectorAll('.close');// array
    const container=document.querySelector('.modal-container');

    btnopen.addEventListener('click',function(){
        container.classList.add('show');
    })

    btnclose.forEach(btn => {
        btn.addEventListener('click',function(){
            container.classList.remove('show');
        });
    });
}