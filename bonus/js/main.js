const userName = prompt("Ciao creiamo la tua password! Dimmi come ti chiami");
// console.log(userName);

const userSurname = prompt("Adesso dimmi il tuo cognome");
const userColor = prompt("Ci siamo quasi! Dimmi il tuo colore preferito!");

// console.log(userName, userSurname, userColor);

document.getElementById("gen-pwd").innerHTML = userName + userSurname + userColor;
document.getElementById("wow").innerHTML = "WoooW";
document.getElementById("suggestion").innerHTML = "PRO TIP: usalo su tutti i tuoi account, 10/10 Best Hacker Magazine";
