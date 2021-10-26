function contar() { // atribuição de função e definição de variaveis
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO]  Faltam dados!')
        res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML = 'contanto:<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert(`Passo inválido! Considerando passo 1`)
            p = 1
        }
        if (i < f) {
            // inicio da contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}