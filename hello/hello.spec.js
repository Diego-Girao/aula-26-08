describe('TESTE MODULO HELLO',()=>{

    it('Quando eu chamo a função greetings ela precisa retornar a mensagem "Bem vindo ao Mundo JS !!!"',()=>{

    const moduloHello = require('./hello');
    expect(moduloHello.greetings()).toBe('Bem vindo ao Mundo JS !!!');
    })
    
    it('Quando eu chamo a função greetings2 passando o nome Berg como parametro de entrada, ela precisa retornar a mensagem "Berg bem vindo ao Mundo JS !!"',()=>{
        const moduloHello = require('./hello');
        expect(moduloHello.greetings2('Berg')).toBe('Berg bem vindo ao Mundo JS !!');
    })

    it('Quando eu chamo a função greetings2 passando o nome Diego como parametro de entrada, ela precisa retornar a mensagem "Diego bem vindo ao Mundo JS !!"',()=>{
        const moduloHello = require('./hello');
        expect(moduloHello.greetings2('Diego')).toBe('Diego bem vindo ao Mundo JS !!');
    })

    it('Quando eu chamo a função greetings3 passando o nome Diego e sobrenome Ramiro como parametro de entrada, ela precisa retornar a mensagem "Diego Ramiro bem vindo ao Mundo JS !!"',()=>{
        const moduloHello = require('./hello');
        expect(moduloHello.greetings3('Diego','Ramiro')).toBe('Diego Ramiro bem vindo ao Mundo JS !!');
    })

    it('Quando eu chamo a função greetings4 passando o nome Diego e sobrenome Ramiro e idade 38 como parametros de entrada, ela precisa retornar a mensagem "Diego Ramiro 38 anos de idade, bem vindo ao Mundo JS !!!"',()=>{
        const moduloHello = require('./hello');
        expect(moduloHello.greetings4('Diego','Ramiro','38')).toBe('Diego Ramiro 38 anos de idade, bem vindo ao Mundo JS !!!');
    })


})