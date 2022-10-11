const grande  = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')

/* Cuando hago click en cada punto:
    - Saber la posicion de ese punto
    - Aplicar un transform translateX al grande
    Quitar la clase activo de TODOS los puntos
    Añadir la clase activo al punto que hemos hecho click 
*/

punto.forEach( (cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion=i
        // Cuando la posicion es 0 el transformX es 0 y cuando es 1 el transform es -50%
        // Hago una operación = posicion * -50
        let operacion= posicion * -100/7

        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach( (cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
