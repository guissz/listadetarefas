const adicionarTarefa = document.getElementById('adicionar')
const texto = document.getElementById('input-tarefas')
const ul = document.querySelector('ul')

// Adiciona novas tarefas
adicionarTarefa.addEventListener('click', function() {
    if (texto.value !== '') {
        // Cria uma 'div' para armazenar os atributos da tarefa
        const divTarefa = document.createElement('div')
        divTarefa.className = 'tarefa'

        // Coloca uma 'checkbox' ao lado da tarefa adicionada
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = 'tarefa-checkbox'
        divTarefa.appendChild(checkbox)

        // Cria um 'span' que armazena o texto da tarefa adicionada
        const textoTarefa = document.createElement('span')
        textoTarefa.textContent = texto.value
        divTarefa.appendChild(textoTarefa)

        // cria um 'ícone' que ficará ao lado do texto da tarefa adicionada
        const deletar = document.createElement('i')
        deletar.className = 'fa-solid fa-trash-can'
        divTarefa.appendChild(deletar)

        ul.appendChild(divTarefa)

        texto.value = ''

        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                textoTarefa.style.textDecoration = 'line-through' // Se a 'checkbox' estiver marcada, adiciona uma linha no texto da tarefa
            } else {
                textoTarefa.style.textDecoration = 'none'
            }
        })

        // Deleta a tarefa que teve seu ícone clicado
        deletar.addEventListener('click', function(e) {
            e.stopPropagation()
            ul.removeChild(divTarefa)
        })
    }
})

// Deleta todas as tarefas que foram adicionadas
function excluirTarefas() {
    const tarefas = document.querySelectorAll('.tarefa');
    tarefas.forEach(function(tarefa) {
        tarefa.remove();
    });
}

const botaoDeletarTodasAsTarefas = document.getElementById('deletar');
botaoDeletarTodasAsTarefas.addEventListener('click', excluirTarefas);
