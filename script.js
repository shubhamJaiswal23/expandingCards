//accessing the elements in the DOM
// const container = document.querySelector('.container');
// const div = document.querySelectorAll('.panel');
// console.log(div);

// function expandOnClick(e) {
//   div.forEach((item) => {
//     item.classList.remove('active');
//   });
//   if (e.target.classList.contains('panel')) {
//     e.target.classList.add('active');
//   }
// }

// container.addEventListener('click', expandOnClick);

//Anther Method
const panels = document.querySelectorAll('.panel');

panels.forEach((item) => {
  item.addEventListener('click', () => {
    removeActiveClasses();
    item.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((item) => item.classList.remove('active'));
}
