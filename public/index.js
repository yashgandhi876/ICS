const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
	const data = document.querySelector(".inputData");
	console.dir(data.value);
	let value = data.value.replaceAll("<", "1");
	value = value.replaceAll(">", "0");

	//un commet this line to secure your application
	// document.querySelector(".showData").innerHTML =  `you typed: ${(value)}`;

	// comment this line to secure your application
	document.querySelector(".showData").innerHTML = `you typed ${data.value}`;
});

// const root = document.querySelector("#root")
// const card = document.createElement("div");
// card.classList.add("w-10/12");
// card.classList.add("font-bold");
// card.classList.add("m-auto");
// card.classList.add("p-4");
// const cardData = document.createElement('p');
// cardData.innerHTML = "I am yash Gandhi from pune";
// card.appendChild(cardData);
// root.appendChild(card);

{
	/* <script>

const data = `<div class="w-11/12 m-auto p-4 shadow-lg bg-white">
                    <div>
                        <img src="./hacked.jpg" alt="hacekd img" width="500" height=500>
                    </div>
                    <div class="flex-col justify-center font-bold">
                        <h1>
                            you are hacked
                        </h1>
                        <h2>
                            send bitcoin to this place : 145ycjkmJGhypj6whkexKjmscRb2im53mC
                        </h2>
                    </div>
                </div>`;

const root = document.querySelector(".hacked-card");
const card = document.createElement('div');
card.innerHTML= data;

root.appendChild(card);
</script> */
}
