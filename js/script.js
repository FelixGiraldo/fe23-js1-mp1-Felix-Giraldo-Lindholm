const myRows = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];

//Skapar en for loop som skapar 5 olika h1 element och ökar storeken *10 varje iteration
for (let i = 0; i < 5; i++) {
  let myH1 = document.createElement("h1");
  const hue = i * 10;
  let mySize = (i + 1) * 10;
  myH1.innerText = myRows[i];

  myH1.style.textAlign = "center";
  myH1.style.padding = "10px";
  myH1.style.backgroundColor = "blue";

  myH1.style.backgroundColor = `hsl(${hue}, 100%, 50% )`;
  myH1.style.fontSize = `${mySize}px`;
  document.body.appendChild(myH1);
}

// Skapar en div. Ger den en width och height samt gör bordern synlig och centrerar divens innehåll
let myDiv = document.createElement("div");
myDiv.style.border = "thick solid black";

myDiv.style.width = "100%";
myDiv.style.height = "400px";
myDiv.style.alignItems = "center";
myDiv.style.justifyContent = "space-around";

myDiv.style.display = "flex";
document.body.appendChild(myDiv);

// Deklarerar variabler och ger dem värden
// Skapar variabeln myAlign, som gör att jag kan använda mig av 0, 1 och 2 för att bestämma positioneringen av p taggarna.
// Använder mig av detta på rad 55
let myAlign = ["left", "center", "right"];
let myStrNumbers = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

//Skapar tre divar i en for loop. Skapar sen en nestled for loop som skapar innehållet för alla tre divar med hjälp av if statements
for (let i = 0; i < 3; i++) {
  let myInnerDiv = document.createElement("div");
  myInnerDiv.style.height = "fit-content";
  myInnerDiv.style.width = "5%";
  myInnerDiv.style.padding = "10px";
  myInnerDiv.style.backgroundColor = "hsl(190, 100%, 47%)";
  myDiv.appendChild(myInnerDiv);

  for (let j = 0; j < 10; j++) {
    let myP1 = document.createElement("p");
    myP1.style.textAlign = myAlign[i];
    myP1.style.margin = "0";

    //Tre if statements som ändrar innehållet i vardera kolumner
    myInnerDiv.appendChild(myP1);
    if (i == 0) {
      myP1.innerText = j;
    }
    if (i == 1) {
      myP1.innerText = 9 - j;
    }
    if (i == 2) {
      myP1.innerText = myStrNumbers[j];
    }

    //Ändrar bakgrundsfärgen på vart annan rad i kolummnerna
    if (j % 2) {
      myP1.style.backgroundColor = `hsl(211, 100%, 47%)`;
    } else {
      myP1.style.backgroundColor = `hsl(200, 100%, 47%)`;
      myP1.style.color = "white";
    }

    //Ändrar bakgrundsärgen på 4, 8, och sex i de tre olika kolumnerna
    if (i == 0 && j == 4) {
      myP1.style.backgroundColor = "hsl(190, 100%, 47%)";
    }
    if (i == 1 && j == 1) {
      myP1.style.backgroundColor = "hsl(190, 100%, 47%)";
    }
    if (i == 2 && j == 5) {
      myP1.style.backgroundColor = "hsl(190, 100%, 47%)";
    }
  }
}
