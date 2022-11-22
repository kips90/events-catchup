// alert("HELLO")
const button = document.getElementById("calculateBtn")

button.addEventListener("click", function(){

    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    document.getElementById("answer").innerText =  num1+num2
    // alert(num1+num2)
})