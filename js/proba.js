function Ariketak(){
   Galdera3()
   Galdera4()
   Galdera6()
   Galdera7()
   Galdera8()
   Galdera9()
   Galdera10()
   Galdera11()
   Galdera13()
   Galdera14()
   Galdera16()
   Galdera17()
   Galdera18()
   Galdera19()
}


 function Galdera3 (){
    let selectedList= document.createElement("select")
    selectedList.id="a"
    document.body.appendChild(selectedList)
    }
    function Galdera4 (){
    let combo= document.querySelector("select")
    let opzioa= document.createElement("option")
    opzioa.value="1234"
    opzioa.text="Manu Chao"
    combo.appendChild(opzioa)
    }
    //Ez exekutatu, delako 3+4, beraz ez da behar
    /*function Galdera5 (){
    let combo= document.createElement("select")
    let opzioa= document.createElement("option")
    opzioa.value="1234"
    opzioa.text="Manu Chao"
    ///ID JARTZEKO NAHI BADUZU
    combo.id="XXXX"
    combo.appendChild(opzioa)
    }*/
    function Galdera6 (){
      fetch('https://musicbrainz.org/ws/2/artist?query=%22Manu%20Chao%22&fmt=json')
.then(r => r.json())
.then(artistas => {
      let emaitza= artistas.artists.filter(function(artista){
         if(artista.score>50){
            return artista
         }
      }).map(uneko=>uneko.id)
      alert(emaitza.join('\n'))
    })
   }
    function Galdera7(){
      let combo2= document.createElement("select")
      combo2.id="combo2"
      document.body.appendChild(combo2)
      fetch('https://musicbrainz.org/ws/2/artist/7570a0dd-5a67-401b-b19a-261eee01a284?inc=release-groups&fmt=json')
.then(r => r.json())
.then(r=>{
      r["release-groups"].forEach(e=>{
            let option= document.createElement('option')
            option.text= e.title
            combo2.appendChild(option)
      })
      
    })
   }
       function Galdera8(){
      let combo2= document.getElementById("combo2")
      combo2.addEventListener('change',event=>{
         let aukeratuElementua= event.target.options[event.target.selectedIndex]

         alert("Aukeratu duzu: "+aukeratuElementua.text)
      })
   }
   function Galdera9(){
      let combo2= document.getElementById("combo2")
      combo2.onchange=function(event){
         let aukeratutakoElem= event.target.option[event.target.selectedIndex]
         console.log(aukeratutakoElem.text)
         //event.target-ek hartu egiten du select-a hau da combo2
         //Beraz, egin beharra da event.target.option, aukeretara jotzeko
         //eta azkenik event.target.selectIndex-ek itzultzen digu option horietatik
         //zenbatgarrena izan den aukeratua
      }
   }
   function Galdera10(){
      let proba = { 'lehenengo-puntua': { 'atala' : 23, 'kapitulua': 4 } }
       let emaitza=proba['lehenengo-puntua'].kapitulua//Bi moduetara egin daiteke
      console.log("Kapitulo zenbakia da :"+ emaitza)
      //EZIN DA JARRI proba.lehenengo-puntua "-" karaktere ez delako onartzen "." egitean, bestela ahalko zen
   }
    function Galdera11(){
      let proba = { 'lehenengo-puntua': { 'atala' : 23, 'kapitulua': 4 } }
      let gakoa=Object.keys(proba) ///ematen digu proba array-aren atributu guztien gakoekin
      let emaitza= proba[gakoa]['kapitulua'] //Bi moduetara egin daiteke
      console.log("Kapitulo 2ariketa zenbakia da: "+ emaitza)
   }
   function Galdera13(){
     
let convert = libro => ({ 
   "ISBN": libro.ISBN,
   "title": libro.izenburua,
   "author": libro.egialea
});
let liburua = { "ISBN" : 1234, "izenburua": "Tom Sawyer", "egialea":
"Mark Twain" }
let book = convert(liburua);
console.log("13 galdera: "+ book.ISBN+book.author+book.title)
   }

    function Galdera14(){
     fetch('https://coverartarchive.org/release/76df3287-6cda-33eb-8e9a-044b5e15ffdd')
     .then(r=>r.json())
     .then(r=>{
         let background=r["images"].filter(unekoa=>{
            if(unekoa.types.includes("Front"))
               return unekoa
         })
         let fondokoEnlazea= background[0].image
         let img= document.createElement('img')
         img.src= fondokoEnlazea
         
         document.body.appendChild(img)
         
     })
   }
   function Galdera16(){
   const pertsonaiak = [
 { izena: 'Norton', adina: 49 },
 { izena: 'Luke', adina: 29 },
 { izena: 'Lucy', adina: 29 }
];
   let emaitza= pertsonaiak.map(unekoa=>unekoa.adina);
   console.log("16 galderako erantzuna: " + emaitza)
   }
   function Galdera17(){
   const pertsonaiak = [
 { izena: 'Norton', adina: 49 },
 { izena: 'Luke', adina: 29 },
 { izena: 'Lucy', adina: 29 }
];
   let emaitza= pertsonaiak.map(unekoa=>unekoa.adina).reduce(function(acc, unekoa){
      return acc+unekoa;
      
   },0);
   console.log("17 galderako erantzuna: " + emaitza)
   }
    function Galdera18(){
   // EZ BADUTE DEPENDENTZIARIK BATA BESTEAREKIN, NIK PROMISE.ALL
   //ERABILIKO NUKE. 
   function promesa1(){
      return new Promise((resolve, reject) => {
         setTimeout(function(){ 
            let ondo=true
         if(ondo){
            resolve (true);
         }else{
            reject("Zerbait gaizki atera da");
         }},3000)
        
      })
   }
   function promesa2(){
      return new Promise((resolve, reject) => {
         setTimeout(function(){ 
            let ondo=true
         if(ondo){
            resolve (true);
         }else{
            reject("Zerbait gaizki atera da");
         }},4000)
        
      })
   }
   const hasi = Date.now()
   Promise.all([promesa1(),promesa2()])//Array bat pasa behar zaio.JARRI PARENTESIAK 
   .then(r=>{
      const bukatu = Date.now()
      console.log("Resultadoak (Array bat) :", r)// kodea emaitza bistaratzeko, kontuan hartu emaitzak array bat direla
      console.log("Pasatako denbora", bukatu-hasi, "ms")
   })
   //4 SEGUNDU BEHARKO LITUZKE
   //GOGORATU CONSOLE IREKITZEKO, WEB HORRIAN F12 SAKATU
   }
   function Galdera19(){
      let botoia= document.createElement("button")
      
      document.body.appendChild(botoia)
      botoia.className= "test"

      let lortubotoia= document.querySelector(".test")//Klase izenarekin lortzeko
      //let lortubotoia= document.querySelector("#test")//ID-arekin lortzeko
      //let lortubotoia= document.querySelector("test")//etiketa izenarekin lortzeko
      //let lortubotoia= document.querySelector("&test")//Ez da exixitzen
      lortubotoia.textContent="Botoia"
      lortubotoia.addEventListener("click",()=>{
         alert("botoia zapalduta")
      })
   }

window.onload=Ariketak