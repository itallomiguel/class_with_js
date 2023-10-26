module.exports = class Cliente{
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email
        this.data_cadastro = new Date();
    } 

    retorna_nome(){
        return this.nome;
    }
    retorna_idade(){
        return this.idade;
    }
    retorna_email(){
        return this.email;
    }
    retorna_data_cadastro(){
        return this.data_cadastro;
    }

}