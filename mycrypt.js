function crypt(msg, key) {
    // Separa os caracteres
    let phrase = msg.split("");

    // Gera um numero da sequencia de fibonacci para cada caractere
    let sequencia = fibonacci(phrase.length);

    // Loop para passar pelos itens do array
    for (let i = 0; i < phrase.length; i++) {
        // Transforma cada letra em um decimal de ASCII e multiplica pela sequencia de fibonacci
        phrase[i] = phrase[i].charCodeAt(0) * sequencia[i]

        // Adiciona a key
        phrase[i] += String(key);
    }

    // Definindo um uma saída no formato de string    
    let output = "";

    // Loop concatenando a minha mensagem    
    for (let i = 0; i < msg.length; i++) {
        output += phrase[i];
    }

    // Retorna a mensagem já criptografada    
    return output;
}

function decrypt(cypher, key) {
    // Uso a key para dividir a string em um array    
    const msg = cypher.split(String(key));

    // Gera um numero da sequencia de fibonacci para cada caractere
    let sequencia = fibonacci(msg.length);

    // Divide cada um dos elementos pela sequencia de fibonacci e transforma de ASCII para caracteres    
    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / sequencia[i]);

    }
    // Defininindo um uma saída no formato de string    
    let output = "";

    // Loop concatenando a minha mensagem    
    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    // Retornando a mensagem descriptografada    
    return output;
}

// Função que retorna sequência de Fibonacci
function fibonacci(n_length) {
    let fAns = 1;
    let f = 1;
    let fRes = 1;
    let sequencia = [1];
    for (let i = 1; i < n_length; i++) {
        sequencia[i] = fRes;
        fRes = f + fAns;
        fAns = f;
        f = fRes;
    }
    return sequencia
}

const frase = "Testando criptografia para ac de redes"
const hash = "731244"

let pass = crypt(frase, hash)
console.log(pass)
let result = decrypt(pass, hash)
console.log(result)