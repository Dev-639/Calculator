let string = "";
let buttons = document.querySelectorAll('.button');
let audio = document.querySelector('#audio');
let music = new Audio('bunshin_seal.mp3');
Array.from(buttons).forEach((bt) => {
    bt.addEventListener('click', (e) => { 
        if (e.target.innerHTML == '=') {
            if (string != "") {
                try {
                    string = eval(string) + "";
                    document.querySelector('input').value = string;
                } catch (error) {
                    string = "N a N";
                    document.querySelector('input').value = string;
                }
            }
            music.play();
        }
        else if (e.target.innerHTML == 'C') {
            if(string=="Invalid Input"){
                string="";
            }
            else{
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
            music.play();
            }
        }
        else if (e.target.innerHTML == 'A C') {
            string = "";
            document.querySelector('input').value = string;
            music.play();
        }
        else { 
            string = string + e.target.innerHTML;
            console.log(e.target);
            document.querySelector('input').value = string;
        }
    }
    )

});
