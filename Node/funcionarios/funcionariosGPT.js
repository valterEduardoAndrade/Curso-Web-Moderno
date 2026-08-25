const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //axios é um client http, faz requisições para obter informações de algo que está remoto

axios.get(url).then(response =>{
    const funcionarios = response.data
    
    // Filtra os funcionários para incluir apenas aqueles do país 'China'
    const funcionariosChina = funcionarios.filter(funcionario => funcionario.pais === 'China');

    // Verifica se há funcionários da China antes de continuar
    if (funcionariosChina.length === 0) {
      console.log('Não foram encontrados funcionários da China.');
      return;
    }

    // Usa o método reduce() para encontrar o funcionário com o menor salário
    const funcionarioComMenorSalario = funcionariosChina.reduce((menor, atual) => {
      // Se o salário do funcionário atual for menor que o do 'menor' até agora,
      // ele se torna o novo 'menor'.
      return atual.salario < menor.salario ? atual : menor;
    });

    const nome = funcionarioComMenorSalario.nome;
    const salario = funcionarioComMenorSalario.salario;

    console.log(`A pessoa com o menor salário na China é ${nome}, com um salário de R$ ${salario}`);
  })
  .catch(error => {
    // Trata erros caso a requisição falhe
    console.error('Ocorreu um erro ao buscar os dados:', error);
     })
      

    

    


//pegar a mulher chinesa com o menor salario