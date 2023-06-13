#  Fleet Manager - Gestão de Frota
Projeto desenvolvido com a finalidade de consultar, exibir, editar, criar e excluir veículos.
O projeto não utiliza banco de dados, os dados estão sendo adicionados, alterados, excluídos e consultados por meio de um arquivo .json

# :computer: Tecnologias
back-end:
- Node v18.12.1;
- JavaScript
- Express
- Swagger

front-end:
- Angular v.15.0;
- node v18.12.1;
- SASS;
- TypeScript;

# :books: Recursos Utilizados
- ngx-spinner - documentação: https://www.npmjs.com/package/ngx-spinner       
- bootstrap - documentação: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- ngx-toastr - documentação: https://www.npmjs.com/package/ngx-toastr

# :wrench: Configuração do ambiente
- Clonar o repositório
- Instalar as dependências com npm install nas pastas do back-end e no front-end
- Para rodar o back-end, acessar até a pasta src e rodar o comando: nodemon index.j
- Para rodar o front-end, acessar a pasta raiz do front-end rodar o comando: ng serve
- Acessar documentação e endpoints do backend: http://localhost:3000/api-docs/
- Acessar front-end: http://localhost:4200/


# :hammer: Funcionalidades do projeto

`BACK-END`
CRUD para os dados de veículso, contendo os dados de:
id, placa, chassi, renavam, marca, modelon e ano.

GET das marcas e modelos - podendo futuramente cadastra-los em tela.

`FRONT-END`
- `Busca de um veículo`: Ao digitar dados de qualquer um dos campos que aparecem na grid da tela, o campo irá filtrar o(s) resultados encontrados.

- `Exibição dos veículos`: Os veículos são exibidos em forma de uma grid, contendo os dados de Placa, Modelo, Marca, Chassi, Renavam e Ano. 
Na mesma grid temos as opções de edição de um veículo e exclusão, por meio e ícones.
A grid é páginada de 10 em 10 elementos.

- `Edição de um veículo`: Ao clicar no ícone de editar um veículo, a aplicação exibirá uma modal, contendo os dados daquele veículo selecionado. 
- `Novo veículo`: Ao clicar no botão para adicionar um novo veículo, a aplicação abrirá o mesmo componente da edição, porém sem trazer dados preenchidos.
Esse componente possui validações de campos, como padrão da placa (antiga e mercosul), número de caracteres, e obrigatoriedade dos campos.

- `Excluir um veículo`: Ao clicar no ícone da lixeira, para excluir um veículo, a aplicação pede a confirmação e realiza a exclusão do veículo.

- `Atualização da grid`: Quando o usuário realizar alguma ação que modifique, adicione ou exclua dados, a grid será atualizada, sem a necessidade de recarregar a página.

- `Página não encontrada`: Caso o usuário tente acessar uma rota inexistente, encontrará uma página de erro.


# 📁 Arquitetura
O projeto foi feito com lazy loding, já prevendo mais módulos e funcionabilidades. Assim, a aplicação carrega de forma mais rápida e dinâmica, só trazendo o que é realmente necessário para o usuário.
Temos os seguintes módulos:
- Fleet-manager: contendo o componente da grid.
- Navigate: módulo com componentes de navegação, como header e page not found.
- Shared: módulo com componentes reutilizáveis, neste caso a modal.
o projeto também possui uma pasta 'utils', onde se encontra o validador de placa de carros, sendo possível utilizar o mesmo em outros forms caso necessário.
