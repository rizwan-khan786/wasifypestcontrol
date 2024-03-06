const jsonData3 = [
  {"id":"1","name":"General Pest Control","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/insecticide.png", "page": "./pestcontrol/general.html"},
  {"id":"2","name":"Cockroach","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/cockroach.png", "page": "./pestcontrol/cocrach.html"},
  {"id":"3","name":"Lizard","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/lizard.png", "page": "./pestcontrol/lizard.html"},
  {"id":"4","name":"Ants","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/ant.png", "page": "./pestcontrol/ant.html"},
  {"id":"5","name":"Termites","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/ant-1.png", "page": "./pestcontrol/terminate.html"},
  {"id":"6","name":"Rats","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/rat.png", "page": "./pestcontrol/rat.html"},
  {"id":"7","name":"Bed Bugs","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/bed-bug.png", "page": "./pestcontrol/bed-bug.html"},
  {"id":"8","name":"Mosquito","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/malaria.png", "page": "./pestcontrol/mosquito.html"},
  {"id":"9","name":"Fly","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/fly.png", "page": "./pestcontrol/fly.html"},
  {"id":"10","name":"Bird Nesting","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/bride.png", "page": "./pestcontrol/nest.html"},
  {"id":"11","name":"Wood Borer","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/wharf-borer.png", "page": "./pestcontrol/wood.html"},
  {"id":"12","name":"Spider","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/spider.png", "page": "./pestcontrol/spider.html"}
];

const pestControlItemsGrid = document.getElementById('pest-control-items-grid');

jsonData3.forEach(service => {
  const serviceDiv = document.createElement('div');
  serviceDiv.classList.add('pest-service');

  const image = document.createElement('img');
  image.src = service.image;
  image.alt = service.name;

  const name = document.createElement('p');
  name.textContent = service.name;

  // Add event listener to navigate to another page on click
  serviceDiv.addEventListener('click', () => {
    // Navigate to the page associated with the service
    window.location.href = service.page;
  });

  serviceDiv.appendChild(image);
  serviceDiv.appendChild(name);

  pestControlItemsGrid.appendChild(serviceDiv);
});
