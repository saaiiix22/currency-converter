const url = "https://v6.exchangerate-api.com/v6/6d30ff158421402165523399/latest/USD"

const select1=document.querySelector("#currencyOne")
const select2=document.querySelector("#currencyTwo")
const inputval=document.querySelector("#inpOne")
const result=document.querySelector("#inpTwo")
let temp=""
const fdata=async()=>{
    const data=await fetch(url)
    const res=await data.json()
    // console.log(res);
    const {conversion_rates}=res
    // console.log(conversion_rates);
    return conversion_rates;
}
const data=fdata()
data.then((ele)=>{
    console.log(ele);
    temp=ele;
for (const i in ele) {
   const opt1=document.createElement("option")
   opt1.value=i;
   opt1.innerText=i;
   const opt2=document.createElement("option")
   opt2.value=i;
   opt2.innerText=i;
   select1.append(opt1);
   select2.append(opt2);
}
  
}).catch((err)=>{
    console.log(err);
})

function cal(){
    // console.log(select1.value);
    // console.log(select2.value);
    // console.log(inputval.value);
    // const val=Number(inputval.value)
    // console.log(temp);

const curr1 = select1.value
const curr2 = select2.value
// console.log(curr1, curr2)
// console.log(temp.curr1)

// const {USD, curr1: currency} = temp;
// console.log(USD, currency)+
    for(let x in temp){
        
        // console.log(x, temp[x])
        if(x === curr1){
            const val = 1/temp[x];
            console.log(val)
            for(let j in temp){
                if(j === curr2){
                    console.log(val*temp[j]*inputval.value)
                    result.value = (val*temp[j]*inputval.value).toFixed(2)
                    // const res = val*temp[j]*inputval.value;
                    // result.textContent = res;
                    // result.innerHTML =  res
                }
            }
        }
          
    }

}
