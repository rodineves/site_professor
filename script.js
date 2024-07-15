// console.log(window.location.href);

// if(window.location.href == "http://127.0.0.1:5500/index.html"){
//     console.log("Vai se fuder")
// }

document.querySelectorAll('.title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});