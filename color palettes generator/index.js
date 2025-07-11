//Access the btn//

let gen_btn = document.getElementById("gen-btn");
let hex_code = document.querySelectorAll(".hexcode");
let box = document.querySelectorAll(".box");


//function that will genrate randome hex codes//

function gen_hex(){
    let randomecolor = Math.floor(Math.random()*16777215);

    let hexcolor = randomecolor.toString(16);

    while(hexcolor.length<6) {
        hexcolor = "0" + hexcolor;
    }

    return "#" + hexcolor;
}



gen_btn.addEventListener("click",function(){
        hex_code.forEach((code,color) => {
            let randomecolor = gen_hex();
            code.textContent=randomecolor;
            box[color].style.backgroundColor = randomecolor;
       

        
        
        
        });








});