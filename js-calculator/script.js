let input_value = document.querySelector('.input_items');
const btn_num_value = document.querySelectorAll('.cal_num');
const all_btn_value = document.querySelectorAll('.cal_btn');
let clear_input = document.querySelector('.clear_input');


input_value.value ="";



all_btn_value.forEach((each_num)=>{

    each_num.addEventListener('click',()=>(input_value.value = input_value.value + "" + each_num.value));
    
});