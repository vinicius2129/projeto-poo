class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }
}

class Agenda {
  constructor() {
    this.contatos = [];
  }

  adicionarContato(contato) {
    this.contatos.push(contato);
  }

  visualizarContatos() {
    this.contatos.forEach((contato, index) => {
      console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
  }

  editarContato(numero, novoContato) {
    if (numero >= 0 && numero < this.contatos.length) {
      this.contatos[numero] = novoContato;
    }
  }

  excluirContato(numero) {
    if (numero >= 0 && numero < this.contatos.length) {
      this.contatos.splice(numero, 1);
    }
  }

  pesquisarContatoPorNome(nome) {
    const resultados = this.contatos.filter(contato => contato.nome === nome);
    resultados.forEach((contato, index) => {
      console.log(`${index + 1}. Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
    });
  }
}

var minhaAgenda = new Agenda();

while (true) {
  console.log('\nEscolha uma opção:');
  console.log('1. Adicionar Contato');
  console.log('2. Visualizar Contatos');
  console.log('3. Editar Contato');
  console.log('4. Excluir Contato');
  console.log('5. Pesquisar por Nome');
  console.log('0. Sair');

  var escolha = parseInt(prompt('Opção: '));

  switch (escolha) {
    case 1:
      var nome = prompt('Nome:');
      var telefone = prompt('Telefone:');
      var email = prompt('Email:');
      minhaAgenda.adicionarContato(new Contato(nome, telefone, email));
      break;
    case 2:
      minhaAgenda.visualizarContatos();
      break;
    case 3:
      var numeroEditar = parseInt(prompt('Número do Contato a ser Editado:')) - 1;
      var novoNome = prompt('Novo Nome:');
      var novoTelefone = prompt('Novo Telefone:');
      var novoEmail = prompt('Novo Email:');
      minhaAgenda.editarContato(numeroEditar, new Contato(novoNome, novoTelefone, novoEmail));
      break;
    case 4:
      var numeroExcluir = parseInt(prompt('Número do Contato a ser Excluído:')) - 1;
      minhaAgenda.excluirContato(numeroExcluir);
      break;
    case 5:
      var nomePesquisa = prompt('Nome a ser Pesquisado:');
      minhaAgenda.pesquisarContatoPorNome(nomePesquisa);
      break;
    case 0:
      console.log('Saindo da Agenda de Contatos.');
      break;
    default:
      console.log('Opção inválida.');
  }

  if (escolha === 0) {
    break;
  }
}
