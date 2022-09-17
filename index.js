console.log('Hello');

var Tnom ='tojo';
var chiffre= 12;

//console.log(nom);
console.log(chiffre);

//-----------declaration variable--------------//
let nomVar1 = 'test1';
nomVar1 = 'essai';

const andrana = 'andrana';

var test2 = 'vin';
var test2 = 'ovy';
test2 = 'anana';

//-----------function--------------//
/*function afficheNom(){
    return'rakoto'
}
console.log(afficheNom() );

function afficheNom(username){
    return username
}
*/
function nom(Vnom) {
    return Vnom
}
console.log(nom('Razaka'));

function prenom(Vprenom) {
    return Vprenom
}

console.log(prenom('tojo'));

function age(Vage) {
    return Vage
}

console.log(age(12));

//Concatenation
console.log('Tojo' + 'Razaka');
console.log(parseInt("2") + parseInt("3"));
console.log(parseFloat("2.2") + parseInt("3.2"));


function reveil(heure){
    // heure === 06h => "Mifohaza";
    // heure === 08h => "Misakafo";
    // heure === 09h => "Miasa";
    // heure === 12h => "Misakafo";
    // heure === 13h => "Miasa";
    if (heure === "06h"){
        return "Mifohaza";
    }
    if (heure === "08h"){
        return "Misakafo";
    }
    if (heure === "09h"){
        return "Miasa";
    }
    if (heure === "12h"){
        return "Misakafo";
    }
    if (heure === "13h"){
        return "Miasa";
    }
}
console.log(reveil('06h'));
console.log(reveil('13h'));

//------------Tableau--------------
var tableau = ["a", 2, 5.5]; //0, 1, 2

for (var i = 0; i < tableau.length; i++) { // mandrefy ny alavan'ilay tableau
    console.log(tableau[i]);
    console.log(tableau[i] + 2);
}

var tab2 = [2, 5, 8, 9, 7, 6, 9];
for (var i = 0; i < tab2.length; i++) { 
    console.log(tab2[i] /4) ;
}

var tab2 = [2, 5, 8, 9, 7, 6, 9,];
tab2.push();  //manala valeur ani am farany
console.table(tab2);
tab2.push(5); //manampy valeur ani am farany
console.table(tab2);

tab2.unshift(6); //manampy valeur ani aloha
console.table(tab2);
tab2.shift();  //manala valeur ani aloha
console.table(tab2);

tab2.splice(3, 2); //manala manomboka eo am 3 de 2 ian ni alana

console.log(tab2.reverse()); //mamadika tableau ani arina lasa ani aloha

console.log(tab2.join()); // manambatra ilay tableau ho chaine de caractere

console.log(tab2.sort()); //manao triage

//---------filtrage tableau---------------

var tab3 = [2, 5, 8, 9, 7, 6, 9,"a","7"];
var tab4 =[]

for (var i = 0; i < tab3.length; i++) { 
if (!isNaN(tab3[i])) {
    tab4.push(parseInt (tab3[i]));
    console.log(tab4);
    console.table(tab4);
}
}
