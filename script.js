const $title = document.getElementById('title')
$title.textContent = 'A new title'

const $message = document.querySelector('.message')
$message.textContent = 'A new message'

// adding class big
$message.className = 'big orange' // replace existing classes
// $message.classList.add('big') // adds only
$message.classList.add('red')

$message.classList.remove('red')

// 1. Make Item 1 red
const $item1 = document.querySelector('li')
$item1.classList.add('red')

// 2. Make Item 2 small, bold, and orange
const $item2 = document.querySelector('.item')
// $item2.className = 'bold orange'
$item2.classList.add('bold', 'orange')
$item2.classList.remove('big')

// 3. Make Item 3 purple
// :firt-child, :last-child, :nth-child
const $item3 = document.querySelector('li:nth-child(3)')
$item3.classList.add('purple')
