contatos = {}

def adicionar_contato():
    nome = input("Digite o nome do contato: ")
    telefone = input("Digite o número de telefone do contato: ")
    email = input("Digite o e-mail do contato: ")
    contatos[nome] = (telefone, email)
    print(f"Contato '{nome}' adicionado com sucesso!")

def visualizar_contatos():
    if not contatos:
        print("Nenhum contato disponível.")
    else:
        print("\nLista de Contatos:")
        for nome, (telefone, email) in contatos.items():
            print(f"Nome: {nome}")
            print(f"Telefone: {telefone}")
            print(f"E-mail: {email}")
            print("-" * 30)

def procurar_contato():
    nome = input("Digite o nome do contato que deseja procurar: ")
    if nome in contatos:
        telefone, email = contatos[nome]
        print(f"\nContato encontrado!")
        print(f"Nome: {nome}")
        print(f"Telefone: {telefone}")
        print(f"E-mail: {email}")
    else:
        print("Contato não encontrado.")

def menu():
    while True:
        print("\nMenu:")
        print("1. Adicionar Contato")
        print("2. Visualizar Contatos")
        print("3. Procurar Contato")
        print("4. Sair")
        
        opcao = input("Escolha uma opção: ")
        
        if opcao == '1':
            adicionar_contato()
        elif opcao == '2':
            visualizar_contatos()
        elif opcao == '3':
            procurar_contato()
        elif opcao == '4':
            print("Saindo do programa...")
            break
        else:
            print("Opção inválida. Tente novamente.")

menu()
