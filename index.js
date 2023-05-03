gsap.from('.navigation', {y:10, ease: 'elastic', duration:2})
gsap.to('.link', {opacity:1, duration:3})
gsap.to('.searchTop', {opacity:1, duration:3})


const search = document.querySelector('.search');
const recipes = document.querySelectorAll('.recipe');
const searchTop = document.querySelector('.searchTop');

searchTop.addEventListener('keyup', function(eventTop) {
    
    const wordTop = eventTop.target.value.toLowerCase()
    recipes.forEach(itemTop =>{
        itemTop.querySelector('.recipeTitle').textContent.toLowerCase().includes(wordTop) ? (itemTop.style.display = 'block') : (itemTop.style.display = 'none');

        if (eventTop.keyCode === 13){
            window.location.href='#recipeSection';
        }
    })
})

search.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase()
    recipes.forEach(item =>{
        item.querySelector('.recipeTitle').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none');
    })
})

gsap.registerPlugin(ScrollTrigger);
gsap.to('.recipe', {
    opacity:1,
    delay: 0.4,
    duration:2,
    scrollTrigger: {
    trigger: '.recipe',
    },
})


