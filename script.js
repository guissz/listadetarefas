const adicionarTarefa = document.getElementById('adicionar')
const texto = document.getElementById('input-tarefas')
const ul = document.querySelector('ul')

adicionarTarefa.addEventListener('click', function() {
    if (texto.value !== '') {
        const divTarefa = document.createElement('div')
        divTarefa.className = 'tarefa'

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = 'tarefa-checkbox'
        divTarefa.appendChild(checkbox)

        const textoTarefa = document.createElement('span')
        textoTarefa.textContent = texto.value
        divTarefa.appendChild(textoTarefa)

        const deletar = document.createElement('i')
        deletar.className = 'fa-solid fa-trash-can'
        divTarefa.appendChild(deletar)

        ul.appendChild(divTarefa)

        texto.value = ''

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                textoTarefa.style.textDecoration = 'line-through'
            } else {
                textoTarefa.style.textDecoration = 'none'
            }
        })

        deletar.addEventListener('click', function(e) {
            e.stopPropagation()
            ul.removeChild(divTarefa)
        })
    }
})

function excluirTarefas() {
    const tarefas = document.querySelectorAll('.tarefa');
    tarefas.forEach(function(tarefa) {
        tarefa.remove();
    });
}

const botaoDeletarTodasAsTarefas = document.getElementById('deletar');
botaoDeletarTodasAsTarefas.addEventListener('click', excluirTarefas);
