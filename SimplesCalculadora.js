function Calcular(n1, op, n2){
    
    if(op === "*" || op === "x" || op === "."){
        result = n1 * n2
        console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)
        }else if(op === "-"){
            result = n1 - n2
            console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)}
            else if(op === "+"){
                result = n1 + n2
                console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)}
                else if(op === "/"){
                    result = n1 / n2
                    console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)}
                    else if(op === "%"){
                        result = n1 % n2
                        console.log(`O resultado da expressão ${n1} ${op} ${n2} foi ${result}.`)
                        }
                    }

function fatoracao(n1){
console.log(`|Fatorando o número ${n1}|`);
console.log(`----------------------`)
    let fatorado = 1n;
    let n2 = n1;
if(n1 == 0 || n1 == 1){
    console.log(`| "${n1}" não é uma entrada válida. |`)
}
while(n1 > 1){
    
    fatorado *= BigInt(n1);
        console.log(`| Fatorando...${fatorado}|`);
        n1--
}
console.log(`----------------------`)

}
                    fatoracao(5);
                    Calcular();