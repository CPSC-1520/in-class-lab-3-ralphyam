// Enter your code below.
const resourcesDiv = document.querySelector('.javascript-resources');
const showButton = document.getElementById('show-resources');
showButton.addEventListener('click', () => {resourcesDiv.classList.remove('d-none');});
const listItems = document.querySelectorAll('.javascript-resources .list-group-item');
listItems.forEach(item => {
  item.addEventListener('mouseover', (event) => {
    console.log(event.target);
    event.target.classList.add('fw-bold');
  });
  item.addEventListener('mouseout', (event) => {
    event.target.classList.remove('fw-bold');
  });
});
