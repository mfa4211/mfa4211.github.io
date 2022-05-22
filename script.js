//console.log("Hello World!");

document.getElementById('nama').innerHTML = "Fadli";
document.getElementById('nama').style.color = "blue";

let nama = document.getElementById("nama");

nama.addEventListener("click", function nama(){
    alert("ini harusnya nama");
})

function halo() {
    alert("alert function js")
}

Date()

let tanggal = new Date()
document.getElementById("tanggal").innerHTML = tanggal
document.getElementById("tanggal").style.color = "green";