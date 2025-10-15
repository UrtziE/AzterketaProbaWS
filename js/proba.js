function Ariketak(){
   ariketa1()
}


 function ariketa1 (){
    let combo= document.createElement("select")
    let opzioa= document.createElement("option")
    opzioa.value="1234"
    opzioa.text="Urtzi Guapo"
    combo.appendChild(opzioa)
    document.body.appendChild(combo)
    }
window.onload=Ariketak