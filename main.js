const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let fromdropdown=document.querySelector(".from_dropdown");
let todropdown=document.querySelector(".to_dropdown");
let btn=document.querySelector("button");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");


for(let currCOde in countryList) {
    let newOption=document.createElement("option");
    newOption.innerText=currCOde;
    newOption.value=currCOde;
    fromdropdown.append(newOption);
   if(currCOde=="USD") {
    newOption.selected="selected";
   }


}

function changeFlag(element) {
    let currCode=countryList[element.value];
    let image=element.parentElement.querySelector("img");
    let newSrcCode  =`https://flagsapi.com/${currCode}/flat/64.png`;
    image.src=newSrcCode;

}

fromdropdown.addEventListener("change",(event)=>{
changeFlag(event.target);

})
todropdown.addEventListener("change",(event)=>{
    changeFlag(event.target);
    
    })
for(let currCOde in countryList) {
    let newOption=document.createElement("option");
    newOption.innerText=currCOde;
    newOption.value=currCOde;
    todropdown.append(newOption);
    if(currCOde=="INR") {
        newOption.selected="selected";
    }
}

btn.addEventListener("click", async (evt)=> {
    evt.preventDefault();
   let amount=document.querySelector(".amount input");
  if(amount.value === "" || amount.value<0) {
    amount.value=1;
  }

  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  let finalAmount=rate*amount.value;
  let messageBox=document.querySelector(".msg");
  messageBox.innerText=`${amount.value} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
})