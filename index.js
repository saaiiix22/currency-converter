const currencyOne = document.querySelector("#currencyOne")
const currencyTwo = document.querySelector("#currencyTwo")
const inpOne = document.querySelector("#inpOne")
const inpTwo = document.querySelector("#inpTwo")
const btn = document.querySelector("button")

const url = "https://v6.exchangerate-api.com/v6/6d30ff158421402165523399/latest/USD"

async function exhange(){
    let fdata = await fetch(url)
    let response = await fdata.json()

    // console.log(response);
    // console.log(response.conversion_rates);

    const currData = response.conversion_rates
    // console.log(currData);

    for(let i in currData){
        // console.log(i);
        // console.log(currData[i]);

        const optOne = document.createElement("option")
        optOne.setAttribute("value",i)
        optOne.innerHTML = i
        currencyOne.append(optOne)

        const optTwo = document.createElement("option")
        optTwo.innerHTML = i
        currencyTwo.append(optTwo)

       

    }
    
}
exhange()



