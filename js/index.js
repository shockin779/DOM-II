// Your code goes here

// Stop nav items from refreshing the site when clicked
let navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach(navLink => navLink.addEventListener('click', event => {
    event.preventDefault();
}));



// 1. Setup event listener to alert when someone copies footer text.
let footer = document.querySelector('.footer');

footer.addEventListener('copy', (event) => {
    alert('You have copied something in the footer!');
    event.stopPropagation();
})


// 2. Setup event listener for buttons to be click
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.target.textContent = 'We are sold out! Sorry';
    });
});


// 3. Hide page when the lowercase h key is pressed
window.addEventListener('keydown', event => {
    if(event.keyCode === 72) {
        event.target.classList.toggle('hidden');
    }
});


// 4. When bus is double clicked, make it do a 360 degree turn
let busImg = document.querySelector('header img');

busImg.addEventListener('dblclick', event => {
    event.target.style['animation-name'] = 'zoom';
    event.target.style['animation-duration'] = '1s';
    let test = event;

    setTimeout(function() {
        test.target.style['animation-name'] = '';
        test.target.style['animation-duration'] = '';
    },1000);
})


// 5. Grab the img-content pictures and add a scale on mouse enter
let contentPictures = document.querySelectorAll('.img-content img');

contentPictures.forEach(picture => picture.addEventListener('mouseenter', event => {
    event.target.style.transform = 'scale(1.1)';
}));


// 6. Remove scale on mouse leave
contentPictures.forEach(picture => picture.addEventListener('mouseleave', event => {
    event.target.style.transform = 'scale(1.0)';
}))


// 7. Alert which aux mouse button was pressed on the intro
let intro = document.querySelector('.intro');

intro.addEventListener('auxclick', event => {
    switch (event.button) {
        case 2:
            alert('You right clicked on the intro');
            break;
        case 3:
            alert('You clicked the back button on the intro');
            break;
        case 4:
            alert('You clicked the forward button on the intro');
            break;
    }
})

// 8. Change background color to red if someone resizes the view
let body = document.querySelector('body');
window.addEventListener('resize', event => {
    body.style.backgroundColor = 'red';
});

// 9. Alert when someone copies something anywhere on the page
// This is to make sure propogation is being stopped from the footer copy event
body.addEventListener('copy', event => {
    alert('you have copied something in the body')
});


// 10. If someone tries to delete anything in the footer from the DOM, it
// redirect them to lmgtfy
footer.addEventListener('DOMNodeRemoved', event => {
    console.log('event happened')
    window.open('https://lmgtfy.com/?q=How+to+code+in+javascript', '_blank');
});