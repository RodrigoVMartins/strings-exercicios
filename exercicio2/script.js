// Observe a string abaixo:

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) **Remova** o excesso de espaços no final da string;

// b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

// c) **Substitua** os traços `________` por “sticioso”.

// ------------------------------------------------------------------------------------------------------------------

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString.trim());

console.log(minhaString.length);

console.log(minhaString.trim().length);

console.log(minhaString.replaceAll("________", "sticioso").trim());

// -------------------------------------------------------------------------------------------------------------------

// Método 2

// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// const minhaStringSemEspaco = minhaString.trim()

// console.log(minhaStringSemEspaco);

// console.log(minhaString.length);

// console.log(minhaStringSemEspaco.length);

// console.log(minhaStringSemEspaco.replaceAll("________", "sticioso"));