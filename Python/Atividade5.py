def calculo_area_retangulo(comprimento, largura):

    area = comprimento * largura
    return area

comprimento = int(input("Qual o comprimento?"))
largura = int(input("Qual a largura?"))

area_total = calculo_area_retangulo(comprimento, largura)
print(f"A área total do retângulo é {area_total}")

