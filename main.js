let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.screen input');

function aC() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.value = '0';
}
document.querySelector('.ac').addEventListener('click', aC);

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (event) =>{
        if(!event.target.classList.contains('btn')) return;
        if(event.target.classList.contains('ac')) return;

        out.textContent='';
        const key = event.target.textContent;

        if(digit.includes(key)){
            if(b === '' && sign===''){                
                a+=key;
                out.value=a;
            }
            else if(a!=='' && b!=='' && finish){
                b=key;
                finish = false;
                out.value=b;
            }
            else{
                b+=key;
                out.value=b;
            }
            console.log(a,b, sign);
            return;
        }
        if(action.includes(key)){
            sign=key;
            out.value= sign;
            console.log(a,b,sign);
            return;
        }
        if(key === '='){
            if(b==='') b=a;
            switch(sign){
                case "+":
                    a=(+a) + (+b);
                break;
                case "-":
                    a=a-b;
                break;
                case "X":
                    a=a*b;
                break;
                case "/":
                    if(b==='0'){
                        out.value='Error';
                        a='';
                        b='';
                        sign = '';
                        return;
                    }
                    a=a/b;
                break;
            }
            finish = true;
            out.value=a;
            console.log(a,b, sign);
        }
    });
});