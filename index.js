const selects = document.querySelectorAll(".language-select");
const dropIcons = document.querySelectorAll(".drop-icon");

selects.forEach((select, index) => {
    const dropIcon = dropIcons[index];

    select.addEventListener('click', () => {
        dropIcon.classList.toggle('active-rotate');
    });

    select.addEventListener('blur', () => {
        dropIcon.classList.remove('active-rotate');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const btnlists = document.querySelectorAll('.sixth-box .sixth-lists ul li button');
    const ansList = document.querySelectorAll('.sixth-box .sixth-lists ul li .ans');
    const svgList=document.querySelectorAll('.sixth-box .sixth-lists ul li button svg');

    btnlists.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Toggle active-lists class on the corresponding answer
            ansList[index].classList.toggle('active-lists');
            ansList[index].classList.toggle('deactive-lists');
            svgList[index].classList.toggle('active-svg');

            // Close other answers if open
            ansList.forEach((ans, i) => {
                if (i !== index && ans.classList.contains('active-lists')) {
                    ans.classList.remove('active-lists');
                    ans.classList.add('deactive-lists');
                    svgList[i].classList.remove('active-svg');
                }
            });
        });
    });
});