const jsonData1 = [
    {"id":"1","name":"Home Cleaning","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/mop.png"},
    {"id":"2","name":"Tank Cleaning","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/spray.png"},
    {"id":"3","name":"Sofa Cleaning","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/cleaning.png"},
    {"id":"4","name":"Bathroom Cleaning","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/bathtub-cleaning.png"},
    {"id":"5","name":"Kitchen Cleaning","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/cleaning-1.png"},
    {"id":"6","name":"Glass Cleaning","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/window-cleaning.png"},
    {"id":"7","name":"Office Cleaning","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/business.png"},
    {"id":"8","name":"Shop Cleaning","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/mall.png"},
    {"id":"9","name":"Open Area Cleaning","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/vacuum.png"}
  ];

  const cleaningItemsGrid = document.getElementById('cleaning-items-grid');

  jsonData1.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('cleaning-service');

    const image = document.createElement('img');
    image.src = service.image;
    image.alt = service.name;

    const name = document.createElement('p');
    name.textContent = service.name;

    serviceDiv.appendChild(image);
    serviceDiv.appendChild(name);

    cleaningItemsGrid.appendChild(serviceDiv);
  });