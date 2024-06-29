let apiUrl = "https://api.currencyapi.com/v3/latest?apikey=cur_live_cKFskm1FWgbH9IE8P91kciU3QdCCGETZiOpaMU9E"

let country_from = document.querySelector('#country_from')
let country_to = document.querySelector('#country_to')
let icon1 = document.querySelector('.icon1')
let icon2 = document.querySelector('.icon2')
let input = document.querySelector('.inp')
let rate = document.querySelector('.rate')
let btn = document.querySelector('.btn')
myresult = result.map((cur) => {

    for (let i = 0; i < cur.length; i++) {
        newOptions = document.createElement("option")
        newOptions.value = `${cur[0]}`
        newOptions.setAttribute("code", `${cur[0]}`)
        newOptions.textContent = `${cur[0]}`

    }
    country_from.appendChild(newOptions)
    for (let i = 0; i < cur.length; i++) {
        newOptions2 = document.createElement("option")
        newOptions2.value = `${cur[0]}`
        newOptions2.setAttribute("code", `${cur[0]}`)
        newOptions2.textContent = `${cur[0]}`
    }
    country_to.appendChild(newOptions2)



})


// First Country Data changing
var val;
var to_val;
country_from.addEventListener('change', (e) => {
    val = e.target.value
    let newVal = val.slice(0, 2)
    icon1.src = `https://flagsapi.com/${newVal}/flat/64.png`

})

// Second Country Data changing

country_to.addEventListener('change', (e) => {
    to_val = e.target.value
    let newVal = to_val.slice(0, 2)
    icon2.src = `https://flagsapi.com/${newVal}/flat/64.png`
})



async function currencyConvert(a,b) {

    inpVal = input.value
    inp_num = Number(inpVal)
    if(inp_num!==Number){
        rate.textContent = `${0}`
        input.classList.toggle('error');
    }
        input.classList.remove('error')
        let response = await fetch(apiUrl+`&base_currency=${a}`)
        let data = await response.json();
        // console.log(inpVal*(data.data[`${b}`].value))
        rate.textContent = inp_num*(data.data[`${b}`].value)
    

}
btn.addEventListener('click',()=> currencyConvert(val,to_val))

