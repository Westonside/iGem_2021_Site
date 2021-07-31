const scroll = (callback) => {
    //have this fire 60 times per second which is more efficent than the scroll listeners
    window.setTimeout(callback, 1000 / 60);
};

const callagain = () => {
    document.querySelectorAll('.member_container').forEach(member => {
        if (elementSeen(member)) {
            //if the member can be seen in the current viewport
            member.classList.add('seen');
        }
        else {
            //remove the seen class if not seen
            member.classList.remove('seen');
        }
    });
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

document.addEventListener('DOMContentLoaded', () => {
    callagain();
});