let color = false; // Gör så att variablen kan ändras och användas i andra funktioner, måste använda detta annars kommer inte denna variabeln fungera i andra funktioner eller ställen i koden, så den kommer till att skrivas om det rätt värde.
let count = 0; // Antal fel räknaren, gör så här för att ange räknaren att den skall börja på 0.
function show_image(src, width, height) { // Bild funktion
    var img = document.getElementById("image"); // Tar img id, använder detta för att skriva om denna bilden till vilka argument som läggs till.
    img.src = src; // Lägger in bilden, använder detta för att lägga till en bild från en mappen.
    img.width = width; // Lägger till längden på bilden, varför jag använder detta är för att bilderna har olika längd då vill jag skriva om dem till en annan längd.
    img.height = height; // Lägger till höjden på bilden, varför jag använder detta är för att bilderna har olika höjd då vill jag skriva om dem till en annan höjd.
}

window.addEventListener("load", function () { // Laddar in HTML innan JavaScript, varför jag just vill ladda in HTML innan Javascript är för att få allt på rätt plats och så att Javascript känner igen allt från HTML.
    let colors = ["Blue", "Red", "Green", "Brown", "White", "Black"]; // Lista med färger, varför jag gör på detta viset är för att man ska kunna slumpa en färg lätt i arrayen.
    color = colors[Math.floor(Math.random() * 6)]; // Slumpa en färg, jag använder detta för att slumpa ett nummer så att man kan använda index nummret i arrayen för att få en färg.

    if (color == colors[0]) { // Kontrollerar ifall det slumade färgen är den i resektive array, använder if och else if för att kontrollera saker i detta fallet så att man kan printa ut rätt "bild färg" på hemsidan.
        show_image("image/Blue.png", 256, 256); // Om det är sant så kör den funktionen med 4 argument, alltså bild, längd och höjd, varför jag just gjorde en funktion för bilderna är för att jag har 6 olika färger så då behöver jag bara fylla in argumenten så löser funktionen resten.
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

function amountWrong() { // Funktion för att dra upp antal fel räknaren med 1, använder en funktion för att det är lätt att kalla en funktion och dra upp räknaren med x antal siffror, i detta fallet till antal fel.
    count += 1;
}

function submit() { // Funktion submit, jag använder denna funktionen för att läsa av när knappen blir nedtryck och då tar den värdet ifrån knappen och aktiverar funktionen.
    let guess = document.querySelector("#txt").value; // Gör en variabel av värdet som finns i text rutan, använder querySelector för att ta ett värde från HTML input ruta, detta är väldigt simpelt och går snabbt att göra till en variabel för att använda den.
    let paragraph = document.querySelector("#p"); // Gör en variabel så man kan skriva om paragraphen, använder querySelector på dessa två (V) för att läsa av paragrapherna så att jag kan skriva om dem senare i koden.
    let wrong = document.querySelector("#wrong"); // Gör en variabel så man kan skriva om paragraphen

    if (guess.toLowerCase() == color.toLowerCase()) { // Kontrollerar ifall gissade färgen är det slumpade färgen, använder if sats för att kontrollerar ifall gissningen stämmer överens med färgen, använder också .toLowerCase() för att göra om orden till små bokstäver så att inputen kan vara capital överallt så man får rätt.
        alert("You're right"); // Announserar ifall det blev rätt, varför jag använder alert är för att det är ett simpelt sätt att skicka ut text till användaren.
        location.reload(); // Laddar om hemsidan så du får en ny färg, varför jag använder detta är för att man ska slippa att trycka F5 eller Shift F5 för att ladda om hemsidan för att få en ny färg.
    } else { // Ifall det inte är rätt, använder else för att om det är fel så kommer den strunta i rätt sektionen och gå vidare i if satsen.
        paragraph.textContent = "You're wrong!"; // Skriv ut i paragraphen att du hade fel, använder detta för att skriva om paragraphen om man har fel med hjälp av querySelector uppe i koden.
        amountWrong(); // Kallar på funktion amountWrong som drar upp fel räknaren med 1, använder detta för att kalla på funktionen för att lätt dra upp räknaren med 1.
        wrong.textContent = `Amount wrong guesses: ${count}`; // Printar ut antal fel i wrong paragrapgen, använder detta för att skriva om paragraphen till antal fel med räknaren.
    }
}