// Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
    
   
//     Estas são as comidas favoritas de nomeDoUsuario:
//     - Comida1
//     - Comida2
//     - Comida3
  
    
// Você deve usar apenas um `console.log()` para isso

// --------------------------------------------------------------------------------------------------------------------

const nome = prompt("Qual seu nome? ")
const comida1 = prompt("Cite a primeira comida favorita sua: ")
const comida2 = prompt("Cite a segunda comida favorita sua: ")
const comida3 = prompt("Cite a terceira comida favorita sua: ")

console.log(`Estas são as comidas favoritas de ${nome}: \n- ${comida1} \n- ${comida2} 
- ${comida3}` );
