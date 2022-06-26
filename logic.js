const password = document.querySelector('.input-pw');
const check = document.querySelector('.checktext');
const visualize = document.querySelector('.visualize');
const generator = document.querySelector('.generator');
const generatorResult = document.querySelector('.password-generator');



//65-90 = A-Z
function getCodes(e){
    let input = password.value;
    let charcodes = [input.length];
    for(let i = 0; i<input.length; i++)
    {
        charcodes[i] = input.charCodeAt(i);
    }
    input = "";
    console.log(charcodes);

    //call function to update checker
    checkPassword(charcodes);
}
//checks if password fullfills specific requirements
function checkPassword(codes){
    let upper = false;
    let lower = false;
    let number = false;
    let symbol = false;
    for(let i = 0; i<codes.length; i++)
    {
        if(codes[i]>=65 && codes[i]<=90) 
        {
            upper = true;
        }
        else if(codes[i]>=97 && codes[i]<=122)
        {
            lower = true;
        }
        else if(codes[i]>=48 && codes[i]<=57)
        {
            number = true;
        }
        else
        {
            symbol = true;
        }
    }
    //sets div color to see if password is safe red->bad orange->medium green->good
    if(upper == true && number == true && lower == true && symbol == true && codes.length > 7)
    {
        check.style.backgroundColor = 'green';
    }
    else if(upper == true && number == true && lower == true)
    {
        check.style.backgroundColor = 'orange';
    }
    else
    {
        check.style.backgroundColor = 'red';
    }
}

function generatePassword(){
    
    let passwordLength = Math.floor(Math.random()*(33-12))+12;
    let password = [];
    //upper, lower, number, symbol
    for(let i = 0; i<passwordLength; i++)
    {
        let randomize = Math.floor(Math.random()*4);
        if(randomize == 0)
        {
            password.push(Math.floor(Math.random()*(91-65))+65);
            
        }
        else if(randomize == 1)
        {
            password.push(Math.floor(Math.random()*(123-97))+97);
        }
        else if(randomize == 2)
        {
            password.push(Math.floor(Math.random()*(58-48))+48);
        }
        else
        {
            password.push(Math.floor(Math.random()*(47-33))+33);
        }
    }

    let output = [];
    for(let i = 0; i<password.length; i++)
    {
        output[i] = String.fromCharCode(password[i]);
    }

    visualize.textContent = output.join('');
}

generator.addEventListener('click', generatePassword);

password.addEventListener('keyup', getCodes);