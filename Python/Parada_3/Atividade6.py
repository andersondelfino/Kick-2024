
numero = int(input("Digite um número inteiro: "))

if numero >= 1:
    for i in range(1, numero + 1):
        if i % 2 != 0:
            print(i)


numero = int(input("Digite um número inteiro: "))

cont = 1

if numero >= 1:
   
    while cont <= numero:
        if cont % 2 != 0:
            print(cont)
        cont += 1
