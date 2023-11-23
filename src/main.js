document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]') /* pega todos os elementos com esse atributo */
    const questions = document.querySelectorAll('[data-faq-question]')
        
    /* para cada elemento que for clicado, será executado a função */
    buttons.forEach(addEventListener('click', function(botao) {
        const abaAlvo = botao.target.dataset.tabButton /* pega o valor do data-tab-button do elemento clicado */
        const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`) /* pega o elemento que tem o data-tab-id igual ao do data-tab-button do elemento clicado */
        escondeTodasAsAbas()
        aba.classList.add('shows__list--is-active')
        removeBotaoAtivo()
        botao.target.classList.add('shows__tabs__button--is-active')            
    }))
    
    questions.forEach(addEventListener('click', function(element) {
        
        const classe = 'faq__questions__item--is-open'
        const elementoPai = element.target.parentNode

        elementoPai.classList.toggle(classe)
    })) 

})

/* function abreOuFechaResposta(element) {
    const classe = 'faq__questions__item--is-open'
    const elementoPai = element.target.parentNode

    elementoPai.classList.toggle(classe)
} */ 
    
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')   
        
    buttons.forEach((botao) => {
        botao.classList.remove('shows__tabs__button--is-active')
    })
}

function escondeTodasAsAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    tabsContainer.forEach((tabContainer) => {
        tabContainer.classList.remove('shows__list--is-active')
    })        
}