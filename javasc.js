const selectAll = document.querySelector('#selectAll');
const select = document.querySelectorAll('#select');
const btnRemove = document.querySelector('.btn-remove');
console.log(select , selectAll);
selectAll.onclick = ()=>{
    btnRemove.classList.add('active');
    if(selectAll.checked == true){
        for(i=0;i<select.length;i++){
            select[i].checked=true;
        }
    }else{
        for(i=0;i<select.length;i++){
            select[i].checked=false;
            btnRemove.classList.remove('active');

        }
    }
}
btnRemove.onclick = ()=>{
    selectAll.checked=false;
    for(i=0;i<select.length;i++){
        select[i].checked=false;
    }
    btnRemove.classList.remove('active');
}