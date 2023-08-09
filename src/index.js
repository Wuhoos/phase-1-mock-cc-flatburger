const burgerMenu = document.querySelector('#restaurant-menu')
const inputForm = document.querySelector('#add-to-cart-form')
const foodDeatil = document.querySelector('#food-detail')
const image = document.querySelector('#image')
const burgerName = document.querySelector('#name')
const numberInCart = document.querySelector('#number-in-cart-count')



fetch('http://localhost:3000/burgers')
.then(response => response.json())
.then(burgerList => {
    showBurgerName(burgerList)
    showBurgerDetails(burgerList[0])
    addingBurgers()
})

function showBurgerName(burgerList){
    burgerList.forEach(burger => {
        const burgerSpan = document.createElement('span')
        burgerSpan.textContent = burger.name
        burgerMenu.appendChild(burgerSpan)
        burgerSpan.addEventListener('click', () => showBurgerDetails(burger))
    })
}

function showBurgerDetails(burger){
    numberInCart.textContent = burger.number_in_cart
    image.src = burger.image
    burgerName.textContent = burger.name
}


function addingBurgers(){
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const numberToAdd = document.getElementById('number-to-add').value
        numberInCart.textContent = parseInt(numberInCart.textContent) + parseInt(numberToAdd)
    })
}
