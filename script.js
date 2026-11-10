function sayHello() {
    console.log('Hello')
}

sayHello()
sayHello()
sayHello()

let text = document.querySelector('.title')

function createProfile(name, age) {
    text.innerHTML = 'Мене звати ' + name + '. Мені ' + age + ' років '
    text.style.color = 'blue'
    text.style.fontSize = "40px"
}

createProfile(' Павло', 14)


createProfile(' Артем', 13)


function createServise(title, price) {
    let p = document.createElement('p')
    p.innerHTML = title +' - '+ price + "грн"
    document.body.appendChild(p)
    
}


createServise('Fade',  500)
createServise('Стрижка бороди', 550)
createServise('Стрижка', 700)