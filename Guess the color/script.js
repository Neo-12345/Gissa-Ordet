let color = false; // Gör så att variablen kan ändras och användas i andra funktioner
let count = 0; // Antal fel räknaren
function show_image(src, width, height) { // Image funktion
    var img = document.getElementById("image"); // Tar img id
    img.src = src; // Lägger in bilden
    img.width = width; // Lägger till längden på bilden
    img.height = height; // Lägger till höjden på bilden
}

window.addEventListener("load", function () { // Laddar in HTML innan JavaScript
    let colors = ["Blue", "Red", "Green", "Brown", "White", "Black"]; // Lista med färger
    color = colors[Math.floor(Math.random() * 6)]; // Slumpa en färg

    if (color == colors[0]) { // Kontrollerar ifall det slumade färgen är den i resektive array
        show_image("image/Blue.png", 256, 256); // Om det är sant så kör den funktionen med 4 argument, alltså bild, längd och höjd.
    } else if (color == colors[1]) {
        show_image("image/Red.png", 256, 256);
    } else if (color == colors[2]) {
        show_image("image/Green.png", 256, 256);
    } else if (color == colors[3]) {
        show_image("image/Brown.png", 256, 256);
    } else if (color == colors[4]) {
        show_image("image/White.png", 256, 256);
    } else if (color == colors[5]) {
        show_image("image/Black.png", 256, 256);
    }
});

function amountWrong() { // Funktion för att dra upp antal fel räknaren med 1
    count += 1;
}

function submit() { // Funktion submit
    let guess = document.querySelector("#txt").value; // Gör en variabel av värdet som finns i text rutan
    let paragraph = document.querySelector("#p"); // Gör en variabel så man kan skriva om paragraphen
    let wrong = document.querySelector("#wrong"); // Gör en variabel så man kan skriva om paragraphen

    if (guess.match(color)) { // Kontrollerar ifall gissade färgen är det slumpade färgen
        alert("You're right"); // Announserar ifall det blev rätt
        location.reload(); // Laddar om hemsidan så du får en ny färg
    } else { // Ifall det inte är rätt
        paragraph.textContent = "You're wrong!"; // Skriv ut i paragraphen att du hade fel
        amountWrong(); // Kallar på funktion amountWrong som drar upp fel räknaren med 1
        wrong.textContent = `Amount wrong guesses: ${count}`; // Printar ut antal fel i wrong paragrapgen
    }
}