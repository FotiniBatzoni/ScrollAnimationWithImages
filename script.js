


const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes); /*event scroll*/

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4; /*the point where the next box appears*/


    boxes.forEach(box => {

        //element.getBoundingClientRect() provides information
        //about the size of an element and its position relative
        // to the viewport  (where in the viewport is it)
        const boxTop = box.getBoundingClientRect().top; //give us where the top of the particular box is

        if (boxTop < triggerBottom) {
            box.classList.add('show'); //add the class show
        } else {
            box.classList.remove('show'); //remove the class show
        }
    });
}