window.onload = function () {
  // alert("hhi");
  const btnOpen = document.querySelector(".btnOpen");
  const btnClose = document.querySelectorAll(".btnClose"); // now it is array
  const modalcontainer = document.querySelector(".modal-container");

  btnOpen.addEventListener('click',function(){
      modalcontainer.classList.add('show');
  });

  // for(let i=0;i<btnClose.length;i++){
  //     btnClose[i].addEventListener('click',function(){
  //         modalcontainer.classList.remove('show');
  //     });
  // }
  btnClose.forEach((btn) => {
    btn.addEventListener("click", function () {
    modalcontainer.classList.remove("show");
    });
  });
};
