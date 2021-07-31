const tocWork = () =>{
    //add scroll listeners that slide the page to the current section
    document.querySelectorAll('.toc_button').forEach(but =>{
        but.addEventListener('click', () =>{
            document.getElementById(`${but.dataset.section}`).scrollIntoView({
                behavior:'smooth',
                block:'center'
            });
            //set the color for toc
            
        });
    });
}


const scroll = (callback) => {
    //have this fire 60 times per second which is more efficent than the scroll listeners
    window.setTimeout(callback, 1000 / 60);
};

const callagain = () => {
    //check three at a time so because the max number that can be in the viewport is 3
    // let all = document.querySelectorAll('.sections');
    // for(let i )

    let numberSeen = 0;
    let container = [];
    let members = []
    document.querySelectorAll('.sections').forEach(member => {
        let data = member.children[0].children[0];

        if (elementSeen(member)) {
            
            //if the member can be seen in the current viewport
            //find which element is the closeset in the viewport
            member.classList.add('seen');
            document.querySelectorAll('.toc_button').forEach(toc =>{
                if(toc.dataset.section === data.id){
                    container[numberSeen] = toc;
                    members[numberSeen] = member;
                    numberSeen++;
                    
                }
            });
            //them go and check if the header can be seen to get a more specific read
        }
        else {
            //remove the seen class if not seen
            member.classList.remove('seen');
            //remove the styles of the not seen
            document.querySelectorAll('.toc_button').forEach(toc =>{
                if(toc.dataset.section === data.id){
                    toc.classList.remove('found');
                }
            })
            
        }
        
    });
    switch (numberSeen) {
        case 1:
            //just set the class
            container[0].classList.add('found');
            break;
        case 2:
            //if there are two check if you can see the header of both
            if(elementSeen(members[0].children[0].children[0])){
                //if can see the header
                container[0].classList.add('found');
                container[1].classList.remove('found');
            }

            else if(elementSeen(members[1].children[0].children[0])){
                container[1].classList.add('found');
                container[0].classList.remove('found');

            }
            
            break;
        case 3:
            //go with the middle one
            container[1].classList.add('found');
            container[0].classList.remove('found');
            container[2].classList.remove('found');
            break;
        default:
            break;
    }
    //trigger again
    scroll(callagain);
}


//code found on stackoverflow
const elementSeen = (member) => {
    var rect = member.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight ||
                document.documentElement.clientHeight))
    )
}





document.addEventListener('DOMContentLoaded',() =>{
    tocWork();
    callagain();

});

