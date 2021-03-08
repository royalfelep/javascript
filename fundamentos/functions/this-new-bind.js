function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) // caso declarar a função usando notação padrão 'function()' ao invés de 'arrow function', é necessário acrescentar o .bind(pessoa) para referenciar o 'this'. Outra maneira é criar uma constante [com nome padrão 'self'], atribuir o 'this' a ela e usar a constante, pois por se tratar de uma constante, ela sempre vai referenciar o objeto em que foi criada.
}

/*
const f1 =  Pessoa // atribui a função pessoa a variavel f1
f1() // inicializa a função pessoa a partir da variavel
*/

/* CONSTRUCTOR NEW:
It does 5 things:

It creates a new object. The type of this object is simply object.
It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__) property to be the constructor function's external, accessible, prototype object (every function object automatically has a prototype property).
It makes the this variable point to the newly created object.
It executes the constructor function, using the newly created object whenever this is mentioned.
It returns the newly created object, unless the constructor function returns a non-null object reference. In this case, that object reference is returned instead.
*/

new Pessoa