const cartoes = [
    {
        id: 2,
        bandeira: 'Mastercard (2017)'
    },
    {
        id: 3,
        bandeira: 'American Express, Diners'
    },
    {
        id: 4,
        bandeira: 'Visa'
    },
    {
        id: 5,
        bandeira: 'Mastercard, Elo'
    },
    {
        id: 6,
        bandeira: 'Discover'
    }
]

let card = '1'

const identificaCartao = c => c.id === parseInt(card.substr(0, 1)) 
const bandeira = b => b.bandeira 
const validandoCartao = cartoes.filter(identificaCartao).length === 0? 'digito(s) invalido(s)' : card
 

console.log(card);
console.log(cartoes.filter(identificaCartao));
console.log(validandoCartao)
//console.log(resultado);


//console.log('exemplo: ' +  card.substr(0, 1)); // exemplo para pegar 1º digito de uma string
