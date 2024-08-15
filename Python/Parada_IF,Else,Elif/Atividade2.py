peso = float(input("Qual o seu peso?"))
altura = float(input("Qual o sua altura?"))

IMC = peso / (altura * altura)


if IMC < 18.5:
    print(f"Seu indice de massa corporal é {IMC:.2f}")
    print("Magreza")
elif 18.5 <= IMC < 24.9:
    print(f"Seu indice de massa corporal é {IMC:.2f}")
    print("Normal")
elif 25.0 <= IMC < 29.9:
    print(f"Seu indice de massa corporal é {IMC:.2f}")
    print("Sobrepeso")
elif 30.0 <= IMC < 39.9:
    print(f"Seu indice de massa corporal é {IMC:.2f}")
    print("Obesidade")
elif IMC <= 40.0:
    print(f"Seu indice de massa corporal é {IMC:.2f}")
    print("Obesidade grave")
else:
     print("valor invalido")
