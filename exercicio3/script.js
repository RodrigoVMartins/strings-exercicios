// A partir da frase a seguir, faça o que se pede.

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

// c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.

// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”

// -----------------------------------------------------------------------------------------------------------------

const guardarFrase = (`Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`)

const novaFrase =  guardarFrase.replaceAll("verde", "rosa").replaceAll("azul", "laranja")

console.log(novaFrase);

const deixarTudoMaiusculo = (`Jorge tem uma casa verde e com portão azul, com os dizeres: ` + `"BOAS VINDAS, mas não deixe o gato sair"`.toUpperCase())

console.log(deixarTudoMaiusculo);
