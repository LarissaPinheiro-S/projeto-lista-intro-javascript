// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altur = prompt("altura")
    let largur = prompt("largura")
    const area = altur*largur
    console.log(area)
  // implemente sua lógica aqui

}

// EXERCÍCIO 02
function imprimeIdade() {
  let year = prompt("ano atual")
   let birth = prompt("ano de nascimento")
   const age = year - birth
   console.log(age)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso / (altura*altura)
    return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("nome")
  let idade = Number(prompt("age"))
  let email = prompt("email")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Sua cor favorita")
   let cor2 = prompt("Sua segunda cor favorita")
   let cor3 = prompt("Sua terceira cor favorita")
  
   const coresArray = [cor1, cor2, cor3]
   console.log(coresArray)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const a = string.toUpperCase()
    return a

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let valor = custo
   let ingresso = valorIngresso 
   const lucro = custo /valorIngresso
   return lucro

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let s1 = string1
    let s2 = string2
    const size = s1.length === s2.length
    return size

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

const ultimo = array[array.length - 1]
return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length-1]

  array[0] = ultimoElemento
  array[array.length -1] = primeiroElemento

  return array
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  const type = string1.toUpperCase() == string2.toUpperCase()
  return type

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("Ano atual")
    let anoNascimento = prompt("Ano de nascimento")
    let emissaoRg = prompt("Ano de emissão do RG")
  
    const age = anoAtual - anoNascimento
    const renova = anoAtual - emissaoRg
  
    const verifica1 = age < 21 && renova >= 5 || age > 20 && renova >= 11 || age > 50 && renova >= 15
    console.log(verifica1)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 const cond1 = ano % 400 == 0
 const cond2 = ano % 4 == 0 
 const cond3 = ano % 100 !== 0 

 const anoBi = (cond1) || (cond2) && (cond3)
 return anoBi
 


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 const p1 = prompt("Você tem mais de 18 anos?")
 const p2 = prompt("Você possui ensino médio completo?")
 const p3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
 const cond = p1 === "sim" && p2 === "sim" && p3 === "sim" 
 console.log(cond)
}