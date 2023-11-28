document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]') /* pega todos os elementos com esse atributo */
    const questions = document.querySelectorAll('[data-faq-question]')

    /* para cada elemento que for clicado, será executado a função */
    buttons.forEach((botao) => {        
        botao.addEventListener('click', mudaAba)
    })

    questions.forEach((question) => {
        question.addEventListener('click', abreEFechaQuestion)
    })
})

function abreEFechaQuestion(element) {
    const classe = 'faq__questions__item--is-open'
    const elementoPai = element.target.parentNode

    elementoPai.classList.toggle(classe)    
}

function mudaAba(element) {
    const abaAlvo = element.target.dataset.tabButton /* pega o valor do data-tab-button do elemento clicado */
    const aba = document.querySelector(`[data-tab-id = ${abaAlvo}]`) /* pega o elemento que tem o data-tab-id igual ao do data-tab-button do elemento clicado */
    escondeAba()
    aba.classList.add('shows__list--is-active') 
    removeBotaoAtivo()  
    element.target.classList.add('shows__tabs__button--is-active')    
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')   
        
    buttons.forEach((botao) => {
        botao.classList.remove('shows__tabs__button--is-active')
    })
}

function escondeAba() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    tabsContainer.forEach((tabContainer) => {
        tabContainer.classList.remove('shows__list--is-active')
    })
}