let input_value = document.querySelector('.input_items');
const btn_num_value = document.querySelectorAll('.cal_num');
const all_btn_value = document.querySelectorAll('.cal_btn');
let clear_input = document.querySelector('.clear_input');
let eql = document.getElementById('eql');

input_value.value ="";



all_btn_value.forEach((each_num)=>{

    each_num.addEventListener('click',()=>(input_value.value = input_value.value + "" + each_num.value));
    
});


eql.addEventListener('click',()=>{
    // console.log(input_value.value);
    let rm_equal = input_value.value.replace('=','');
    return input_value.value =eval(rm_equal)
});