const sentuh = document.getElementById('galery')

sentuh.addEventListener('click', ()  => {
    
})

const c = document.getElementById('galery-container');
const jombo = document.querySelector('.jombo')
const thumb = document.querySelectorAll('.thumb')

c.addEventListener('click', function(e){
    if (e.target.className == 'thumb'){
        jombo.src = e.target.src;
        jombo.classList.add('fade')
        setTimeout(function(){
            jombo.classList.remove('fade')
        },500)
    };
    thumb.forEach(function(thumb){
        thumb.className = 'thumb'
    })
    e.target.classList.add('active')
});
