//your JS code here. If required.
const out_div = document.getElementById("output");
async function getOutput(){
    const input_text = document.getElementById("text");
    const delay = document.getElementById("delay").value;
	 setTimeout(() =>{
		display();
		
	},delay*1000)
}

function display(){
    const input_text = document.getElementById("text").value;
	const val = document.createElement("h1");
	val.innerText = input_text;
	out_div.append(val);
	
}


