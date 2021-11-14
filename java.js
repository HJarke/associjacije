import("./data.js")

const btn1 = document.querySelector("#fBtn1");
const btn2 = document.querySelector("#fBtn5");
const btn3 = document.querySelector("#fBtn9");
const btn4 = document.querySelector("#fBtn13");
const btn5 = document.querySelector("#fBtn2");
const btn6 = document.querySelector("#fBtn6");
const btn7 = document.querySelector("#fBtn10");
const btn8 = document.querySelector("#fBtn14");
const btn9 = document.querySelector("#fBtn3");
const btn10 = document.querySelector("#fBtn7");
const btn11 = document.querySelector("#fBtn11");
const btn12 = document.querySelector("#fBtn15");
const btn13 = document.querySelector("#fBtn4");
const btn14 = document.querySelector("#fBtn8");
const btn15 = document.querySelector("#fBtn12");
const btn16 = document.querySelector("#fBtn16");
const a = document.querySelector("#fBtn17");
const b = document.querySelector("#fBtn18");
const c = document.querySelector("#fBtn19");
const d = document.querySelector("#fBtn20");
const kon = document.querySelector("#eBtn");
const pa = document.querySelector("#pA");
const pb = document.querySelector("#pB");
const pc = document.querySelector("#pC");
const pd = document.querySelector("#pD");
const pk = document.querySelector("#pK");


document.querySelectorAll(".fBtn").forEach(item => {
    item.addEventListener("click", event => {
        item.innerHTML = item.getAttribute("value")
    }) 
});
let link = ""
document.querySelectorAll(".sBtn").forEach(item => {
    item.addEventListener("click", event => {
        let res = prompt("Unesite resenje", "")
        if(res == item.getAttribute("value").toLowerCase()) {
            switch(item.innerHTML) {
                case "A": 
                alert("Tacno! Reseno je polje A!");
                link = ".r1"
                break;
                case "B": alert("Tacno! Reseno je polje B!");
                link = ".r2"
                break;
                case "C": alert("Tacno! Reseno je polje C!");
                link = ".r3"
                break;
                case "D": alert("Tacno! Reseno je polje D!");
                link = ".r4"
                break;
                default: 
                alert("Tacno, pobedili Ste!");
                link = ".Btn"
                break;
            }
            document.querySelectorAll(link).forEach(element => {
                element.innerHTML = element.getAttribute("value")
            });
        }
        else {
            alert("Neispravno!")
            switch(item.getAttribute("value")) {
                case a.getAttribute("value"): pa.innerHTML += res + "; "; break;
                case b.getAttribute("value"): pb.innerHTML += res + "; "; break;
                case c.getAttribute("value"): pc.innerHTML += res + "; "; break;
                case d.getAttribute("value"): pd.innerHTML += res + "; "; break;
                default: pk.innerHTML +=  res + "; "; break;
            }
        }
    }) 
});
