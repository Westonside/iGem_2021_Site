var first_section = 'first_nav_holder';
var navsection = 'first_nav_holder';
var pics = ['crop.jpg', 'coral.jpg']


const background = (value) =>{
    // document.getElementById('first_section').style.backgroundImage = `url("${pics[0]}")`;
    //run forever 
    document.getElementById('first_section').style.backgroundImage = `url("${pics[value]}")`;
    // window.setTimeout(() =>{
    //     value++;
    //     //recursively

    //     background(value%pics.length);


    // },3000);
}




const allButOne = (clicked,all) =>{
    //clear all the other sections and show the one holder
    //all has the four sections if the first is true then just use the first section else check for the data set
    let toShow = clicked.dataset.navsection;
    console.log(toShow);
    //show the div in the datasection
    all.forEach(div =>{
        //hide all except the one section that was clicked used ternary operator
       div.style.display = div.id === toShow ?  'block' : 'none';
       
    });
    
}



const fadeIn = () =>{
    const links = document.querySelectorAll('.nav_links li');
    //make all of the links appear one at a time
    //worki in progress
    links.forEach((el,index) =>{
        el.classList.toggle('link_active');
    });
}




document.addEventListener('DOMContentLoaded', () =>{
    background(0);
    const links = document.querySelectorAll('.nav_links li a');
    const sections = document.querySelectorAll('.nav_links div');

    
    const drop = document.getElementById('dropdown_trip');
    drop.onclick = () =>{
        document.querySelector('.nav_links').classList.toggle('nav_active');
        fadeIn();
        drop.classList.toggle('toggle');
        allButOne(document.getElementById('backStart'), sections);
    }


    //getting the links trigger an animation that will make the links before fade away
    
    //when one of the links are clicked send the data section that indicates which section to show and hide the rest
    //for each link add event listeners that runs the all but one function
    links.forEach(li =>{
        
        li.onclick = (e) =>{
            allButOne(e.target,sections);
        }
    })

    document.querySelectorAll('.final_link').forEach(link =>{
        link.onclick = () =>{
            console.log('store in the session', link.innerText);
            sessionStorage.setItem('page',`${link.innerText}`);
        }
    })

    
 

});




