# miniprojeto-todolocal
Site para criar uma lista de tarefas, salvando os dados no Local Storage.

Todas as tarefas são armazenadas em um array, que é transformado em JSON para se armazenado no Local Storage.
Porém está com alguma incompatibilidade quando se usa o JSON.parse() para transformar o JSON de volta em objeto.
Para contornar isso, o JSON.parse() é armazenada em uma array e logo após é feita uma varredura nesta array para
recriar todos os itens como objetos, e então armazenados na array que realmente será utilizada no código.

Ainda falta implementar a funcionabilidade para editar tarefas.

