let numeros = [1, 2, 3, 4, 5];

console.log("Tamanho do array: " + numeros.length); 

console.log("Elemento na posição 2: " + numeros[2]); 

numeros.push(6);
console.log("Array após inclusão de elemento: " + numeros); 

for (let i = 0; i < numeros.length; i++) {
    console.log("Elemento na posição " + i + ": " + numeros[i]);
}

let ultimoElemento = numeros.pop();
console.log("Último elemento removido: " + ultimoElemento); 
console.log("Array após remoção: " + numeros); 