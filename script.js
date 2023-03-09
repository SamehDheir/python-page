

// onscroll.function()  {
//     if (screenY > 100) {
        
//     } else {
        
//     }
// }

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function removeBtn() {
    let reade_btn = document.querySelector('.reade_btn')
    reade_btn.style.display = 'none';
}
