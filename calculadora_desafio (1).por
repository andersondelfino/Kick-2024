programa {
  funcao inicio() {
    real n1, n2, resultado
    inteiro opcao, contador
    caracter resp = 's'

       enquanto (resp == 's'){

        escreva("Digite 1° numero: ")
        leia (n1)

        escreva("Digite 2° numero: ")
        leia (n2)

        escreva("Escolha uma opção:\n1 - Somar; \n2 - Subtrair; \n3 - Multiplicar;\n4 - Divisão? \n5- Sair \n ")
        leia (opcao)

        escolha(opcao){
          caso 1:
          escreva("resltado: ", n1 + n2)
          pare
          caso 2:
          escreva("resultado: ", n1 - n2)
          pare
          caso 3:
          escreva("Resultado: ", n1 * n2)
          pare
          caso 4:
          escreva("Resultado: ", n1 / n2)
          pare
          caso 5:
          escreva("Progama Finalizado!")
          pare
         }
        
        se (opcao >= 6 ){
          escreva("Opção invalida!")
        }
         escreva("\nDeseja voltar ao menu? S ou N: " )
         leia(resp)
         limpa()
       }
       


  }
}
