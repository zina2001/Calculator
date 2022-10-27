const buttons = document.querySelectorAll("input[type = button]")
console.log(buttons)
const input = document.querySelector('input')
console.log(input)


const display = (character) => {
    input.value += `${character}`
}

const solve = () => {
    const x = input.value;
    const y = eval(x);
    return input.value =` ${y}`
}

const clear = () => {
    return input.value = ""
}
buttons.forEach(item =>{
    item.addEventListener('click',()=>{
        const value = item.value;
        if(value === "="){
            solve()
        }else if(value === "c"){
            clear();
        }else{
            display(value)
        }


    })

})