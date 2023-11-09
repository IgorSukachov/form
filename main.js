function toggleClass() {
    let element = document.getElementById('contact');
    element.classList.toggle('active')
}

let abs = document.getElementById('ger')
abs.addEventListener('click', () => {
    toggleClass()
})