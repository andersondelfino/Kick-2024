def centimetros_para_metros(cm):
    return cm / 100

centimetros = float(input("Digite o valor em centímetros: "))
metros = centimetros_para_metros(centimetros)

print(f"{centimetros} cm é igual a {metros} metros.")
