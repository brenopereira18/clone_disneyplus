document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]') /* pega todos os elementos com esse atributo */
    const questions = document.querySelectorAll('[data-faq-question]')

    const heroSection = document.querySelector('.hero')
    const alturaHero = heroSection.clientHeight
    
    window.addEventListener('scroll', () => {
        const posicaoAtual = window.scrollY      

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader()
        } else {
            exibeElementosDoHeader()
        }
    })


    // Seção das atrações
    buttons.forEach((botao) => {         
        botao.addEventListener('click', mudaAba) /* para cada elemento que for clicado, será executado a função */
    })

    // Seção FAQ 
    questions.forEach((question) => {
        question.addEventListener('click', abreEFechaQuestion)
    })
})

function exibeElementosDoHeader() {
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}

function ocultaElementosDoHeader() {
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

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