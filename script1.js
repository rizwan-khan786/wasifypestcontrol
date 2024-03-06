const jsonData2 = [
    {"id":"1","name":"Home Shifting","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/home.png"},
    {"id":"2","name":"Office Shifting","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/work.png"},
    {"id":"3","name":"Bike Relocation","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/relocation.png"},
    {"id":"4","name":"Industrial Relocation","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/mobility.png"},
    {"id":"5","name":"Warehouse","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/warehouse.png"},
    {"id":"6","name":"Pet Relocation","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/pet-1.png"},
    {"id":"7","name":"Packing","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/packing.png"},
    {"id":"8","name":"Loading Unloading","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/unloading.png"},
    {"id":"9","name":"Tempo on Hire","image":"https://cityprofessionals.in/wp-content/uploads/2023/06/smartphone.png"}
  ];

  const packersItemsGrid = document.getElementById('packers-items-grid');

  jsonData2.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('packers-service');

    const image = document.createElement('img');
    image.src = service.image;
    image.alt = service.name;

    const name = document.createElement('p');
    name.textContent = service.name;

    serviceDiv.appendChild(image);
    serviceDiv.appendChild(name);

    packersItemsGrid.appendChild(serviceDiv);
  });