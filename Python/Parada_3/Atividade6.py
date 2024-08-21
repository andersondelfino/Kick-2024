

n = int(input("Digite um numero inteiro:"))

for n in range(1,n):
    if n % 2 == 1:
        print(n)
        n +=1
        print(n)
