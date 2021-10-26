function tabuada() {
    let num = window.document.getElementById(`txtn`)
    let tab = window.document.getElementById(`seltab`)
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //convertendo número
        let c = 1
        tab.innerHTML = '' // limpando o tabuada
        while (c <= 10) {
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // Item selecionado
            tab.appendChild(item)
            c++ // incrementando o numero
        }
    }

}