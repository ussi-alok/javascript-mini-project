//convert string into number
function text_num(){
    let value = document.querySelector(".input-string").value;
    return Number(value)
}

//store and display the array
function show(){
    let num = text_num();
    let result = document.querySelector(".result");
    let store =[];
    let j =0;

    //evalute and store the values in array
    for(let i=0;i<=num;i++){
        if(i%3 === 0 && i%5 === 0){
            store[j]="fuzzbuzz"
        }
        else if(i%5 === 0){
            store[j]="buzz";
        }
        else if(i%3 === 0){
            store[j]="fuzz";
        }
        else{
            store[j]=i;
        }
        j++;
    }

    // display the array on page
    for(let k=1;k<num+1;k++){
        result.innerHTML += " "+store[k]+", ";
    }
    
}