const painting = document.querySelector('.painting')
const palette = document.querySelector('.palette')
let selectedColor = 'blue'

palette.addEventListener('click', function(e){
    selectedColor = e.target.id 
    //selectedColor = `${e.target.textContent}`
    console.log(e.target.id)
    console.log(`Selected color: ${selectedColor}`)
})
painting.addEventListener('click', function(e){
    console.log('Painting clikcked')
    console.log(e.target)
    e.target.style.backgroundColor = `${selectedColor}`
    console.log(`Painting with Selected color: ${selectedColor}`)
    
})
painting.addEventListener('dblclick', function(e){
    console.log('Turn white')
    console.log(e.target)
    e.target.style.backgroundColor  = 'white'
    //e.target.style.backgroundColor = `${selectedColor}`
    console.log(`Square cleared`)
    
})