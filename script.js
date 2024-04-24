let botaoAdd = document.getElementById('add-btn')
let input = document.getElementById('input-tarefas')
let tarefas = document.getElementById('tarefas')
let marcado = false

botaoAdd.addEventListener('click', function() {
    if (input.value != '') {
        let tarefa = document.createElement('div')
        tarefa.className = 'tarefa'
        tarefas.appendChild(tarefa)

        let textoTarefa = document.createElement('span')
        textoTarefa.textContent = '- ' + input.value
        tarefa.appendChild(textoTarefa)

        let deletar = document.createElement('i')
        deletar.className = 'fa-solid fa-trash lixeira'
        tarefa.appendChild(deletar)

        input.value = ''
        
        tarefa.addEventListener('click', function() {
            if (marcado == false) {
                tarefa.style.textDecoration = 'line-through'
                marcado = true
            } else {
                tarefa.style.textDecoration = ''
                marcado = false
            }
        })
        deletar.addEventListener('click', function() {
            tarefas.removeChild(tarefa)
        })
    }
})