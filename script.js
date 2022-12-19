//atividade 1
// let numero1 = parseInt(prompt(`digite um número`));
// let numero2 = parseInt(prompt(`digite outro número`));
// if (numero1 > numero2) {
//   alert(`O maior número é ${numero1} e a diferença é ${numero1 - numero2}`);
// } else {
//   alert(`o maior número é ${numero2} e a diferença é ${numero2 - numero1}`);
// }

//atividade 2
// let numero1 = parseInt(prompt(`digite um número`));
// let numero2 = parseInt(prompt(`digite outro número`));
// if (numero1 > numero2) {
//   alert(`O número ${numero1} é maior que número ${numero2}`);
// }
// if (numero1 < numero2) {
//   alert(`O número ${numero2} é maior que número ${numero1}`);
// } else {
//   alert(`Número iguais`);
// }

//atividade 3
// let salario = parseFloat(prompt(`informe seu salário`));
// let emprestimo = parseFloat(prompt(`De quanto você precisa?`));
// let porcentagem = (salario / 100) * 30;
// if (emprestimo >= porcentagem) {
//   alert(`Empréstimo não concedido`);
// } else {
//   alert(`Empréstimo concedido`);
// }

//atividade 4
// let numero = parseInt(prompt(`digite um número`));
// let parOuImpar = numero % 2;
// let d3 = numero / 3;
// let d5 = numero / 5;
// if (parOuImpar == 0) {
//   alert(`É par`);
// }
// if (d3 == 1) {
//   alert(`Valor divisível por 3`);
// } else if (d5 == 1) {
//   alert(`Valor divisível por 5`);
// } else {
//   alert(`Valor inválido`);
// }

//atividade 5
// let numero = parseInt(prompt(`digite um número de 1 a 7`));
// if (numero == 1) {
//   alert(`domingo`);
// } else if (numero == 2) {
//   alert(`Segunda-Feira`);
// } else if (numero == 3) {
//   alert(`Terça-Feira`);
// } else if (numero == 4) {
//   alert(`Quarta-Feira`);
// } else if (numero == 5) {
//   alert(`Quinta-feira`);
// } else if (numero == 6) {
//   alert(`Sexta-Feira`);
// } else if (numero == 7) {
//   alert(`Sábado`);
// }

//atividade 6
//  let salario = parseFloat(prompt(`qual o salário?`));
// let porcentagem = parseFloat(prompt(`qual o reajuste?`));
// let ajuste = (salario / 100) * porcentagem + salario;
// if (porcentagem <= 5) {
//   alert(`O salário do funcionário corrigido é de:R$${ajuste.toFixed(2)}`);
// } else {
//   alert(`valor alto demais`);
// }

///atividade 7
// let dolar = parseFloat(prompt(`qual a quantidade em dolár?`));
// let real = parseFloat(prompt(`qual valor dele em R$?`));
// let conversao = dolar * real;
// alert(
//   `$${dolar.toFixed(2)} é equivalente a R$${conversao.toFixed(
//     2
//   )} tendo ${real.toFixed(2)} como cotação`
// );

//atividade 8
// let tipo = parseInt(prompt(`qual tipo de pulverização você deseja?`));
// let acre = parseInt(prompt(`Quantos acres?`));
// let valor = parseInt(acre + 0);
// if (tipo == 1) {
//   valor * 50;
// } else if (tipo == 2) {
//   valor * 100;
// } else if (tipo == 3) {
//   valor * 150;
// } else if (tipo == 4) {
//   valor * 250;
// } else {
//   alert(`esse tipo de serviço não existe!`);
// }
// if (acre > 1000) {
//     valor - (valor / 100) * 5;
//   } else if (valor > 750) {
//     valor - (valor / 100) * 10;
//   }
//   alert(`O valor a ser pago é de:R$${valor}`);

//atividade 9
// let tempo = parseInt(prompt(`quanto tempo você passou na estrada?`));
// let velocidade = parseInt(prompt(`qual a velocidade?`));
// let distancia = tempo * velocidade;
// let gasolina = distancia / 12;
// alert(
//   `Seu veículo percorreu ${distancia}km a ${velocidade}km/h em ${tempo}h de viagem e consumiu ${gasolina.toFixed(
//     2
//   )}L de gasolina`
// );

//atividade 10
// let valor = parseFloat(prompt(`qual valor?`));
// let taxa = parseInt(prompt(`qual a taxa?`));
// let tempo = parseInt(prompt(`quantos dias?`));
// let prestacao = valor + valor * (taxa / 100) * tempo;
// if (tempo <= 0) {
//   alert(`Valor inválido o tempo de atraso deve ser em dias`);
// } else {
//   alert(`R$${prestacao.toFixed(2)}`);
// }
