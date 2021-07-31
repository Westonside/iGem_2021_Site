const tockWork = () =>{
    //allows for the toc navs to slide to the corresponding section
    console.log(document.querySelectorAll('.nav_section'), 'here is the adding');
    document.querySelectorAll('.nav_section').forEach(a =>{
        a.addEventListener('click', function(e){
            e.preventDefault()
            document.getElementById(`${a.innerText}`).scrollIntoView({
                behavior:'smooth',
                block:'center'
            })
        });
    });
}





document.addEventListener('DOMContentLoaded',() =>{
    tockWork();
});


