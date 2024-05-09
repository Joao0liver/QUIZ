const questions = [
    {
        question: "Qual é o uso do operador '===' em JavaScript?",
        answers: [
            "Atribuição do valor",
            "Comparação de valores",
            "Adição de valores",
        ],
        right: 1
    },
    {
        question: "Teste",
        answers: [
            "Linguagem de escrita digital",
            "Linguagem de marcação",
            "Linguagem de programação",
        ],
        right: 2
    },
];

const quiz = document.querySelector("#quiz")

const section = document.querySelector("section")

const rightAnswers = new Set();

const totalPerguntas = questions.length;

const showRightAnswers = document.querySelector("#right-answers span")

showRightAnswers.textContent = `${0} de ${totalPerguntas}`

for (const item of questions) {
    const quizItem = section.cloneNode(true)

    quizItem.querySelector("h3").textContent = item.question
    
    for (const resposta of item.answers) {
        const dt = document.querySelector("dl dt").cloneNode(true);

        dt.querySelector("label").textContent = resposta

        dt.querySelector("input").setAttribute("name", `question-${questions.indexOf(item)}`)

        dt.querySelector("input").onchange = (event) => {
            const estaCerta = Number(event.target.value) === item.right

            rightAnswers.delete(item)

            if (estaCerta) {
                rightAnswers.add(item)
            }

            showRightAnswers.textContent = `${rightAnswers.size} de ${totalPerguntas}`
        }

        quizItem.querySelector("dl").appendChild(dt);
    }

    quizItem.querySelector("dl dt").remove()

    quiz.appendChild(quizItem)
}