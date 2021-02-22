$('.nav ul li').click(function() {
    
    $(this).addClass("activte").siblings().removeClass('active');
})

// const tabBtn = document.querySelectorAll('.nav ul li');

// const tab = document.querySelectorAll('.tab');

// function tab(panelindex){
//     tab.forEach(Function(node){
//         node.style.display = 'none'
//     });
//     tab[panelindex].style.display = 'block';
// }
// tabs(0);


// let bio = document.querySelector('.bio');

// function bioText() {
//     bio.innerText = bio.innerText.substring(0, 100)
// };
// bioText() + "...";