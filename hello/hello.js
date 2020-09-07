function greetings(){
    //comandos a serem executados
    return "Bem vindo ao Mundo JS !!!";
}

function greetings2(name){
    return name + " bem vindo ao Mundo JS !!";
}

function greetings3(name,lastname){
    return name + " " + lastname + " bem vindo ao Mundo JS !!";
}

function greetings4(name,lastname,age){
    return name + " " + lastname + " " + age + " anos de idade, bem vindo ao Mundo JS !!!";
}

module.exports = {
    greetings,
    greetings2,
    greetings3,
    greetings4
}
