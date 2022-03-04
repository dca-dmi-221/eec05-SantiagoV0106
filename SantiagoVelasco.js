'use strict'

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function shuffle(){
    const random = Math.random()
    if (random < 0.5) {
        return - 1        
    }
    else {
        return 1
    }
}
function wordCutter(word) {
    let split = word.split("").sort(shuffle)
    split.forEach(letter=>console.log(letter))
}
wordCutter(testWord);

/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
  
}



/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    let totalLetters = 0;
    const sortedWords = wordsList.sort((word1,word2)=> {
        if (word1.length < word2.length){
            return -1;
        }
        else if (word1.length > word2.length){
            return 1;
        }
        else{ return 0;}
});

sortedWords.forEach(wordsList => totalLetters += wordsList.length);
const average = totalLetters / sortedWords.length;

return { shortesword: sortedWords[0],
longestword: sortedWords[sortedWords.length -1], average};}

console.log(wordLengthClassifier(testSampleList))


/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    let palabrapal = word.tolowerCase.split("").reverse().join("");
    if (palabrapal=== word.tolowerCase()) {
        
        console.log("La palabra" + word + "es palidromo")        
    }
    else {
        console.log("La palabra" + word + "no es palidromo")  
    }
}
    


/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let objectContainer = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
  const list = objectContainer.list;
  let vocales = 0;
  let consonantes = 0;

  list.forEach(word =>{
      word.split("").forEach(letter =>{
          if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
          vocales++;
          }          
          else {
              consonantes++;
          }
      })
  })

  return [vocales, consonantes];
}
console.log(lettersCounter(objectContainer));

/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    //newArr = [...listA, ...listB];
    //  return newArr
  }
  console.log(arrayJoiner(wordArrayA,wordArrayB));

/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
  arr = []

  listOfWords.forEach((word,index) => {
      if (word.split("").every(letter =>{
          return wordToExplore.icludes(letter);
      })) 
        arr.push(index)  
      })
  }


/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

/*function vocalsRemoverFromObject(objectMultiContainer) {
    let list = objectMultiContainer.listA.concat(objectContainer.listB);

    list.forEach(word => {
        let wordaa = []
        let result = []

        word.split("").forEach(letter => {
            if (letter !=="a" || letter !=="e" || letter !=="i" || letter !=="o" || letter !=="u") {
                wordaa.push(word);
            }
        })

        result.push(wordaa.join(""))
    })
    return (result)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer)); */

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    const replacedArray = words.map(word => {

    
        let replacedWord;
        for(let i = word.length - 1; i >= 0; i--) {
            const letter = word.charAt(i);
            if(letter === 'a'||letter ==='e'||letter ==='i'||letter === 'o'|| letter ==='u') {               
                replacedWord = word.substring(0, i) + 'X' +  word.substring(i+1 , word.length );
                break;
            }
        }
        return replacedWord;
    })
    return replacedArray;
    
  }


/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {

    let doubleNumber = 0;
    let newarr = [];

    for (let index = 0; index < listB.length; index++) {
        newarr[index]=listB[index].split("").reverse().join("");
        
    }

    for (let i = 0; i < listA.length; i++) {
        for(let j = 0; j < newarr.length; j++){
            if (newarr[j] == listA[i]){
  
                doubleNumber++;
  
            }return doubleNumber;
        }
    }
  
    return {doubleNumber}
  

}

console.log(doubleListVerifier(testListA,testListB));