const out_div = document.getElementById("output");
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
	const msg = text.value;
	const delay_time = Number(delay.value);
    console.log(delay_time);
	if(msg && delay_time>0){
		call(msg,delay_time);
	}
})

async function call(msg,delay_time){
	let x = await new Promise((resolve) =>{
		setTimeout(() =>{
			resolve(msg);
		},delay_time)
	})
    out_div.innerText = x;
	
}

