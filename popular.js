const jsonData5 = [
    {"id":"1", "img":"CityProfessionals/AC-POPULAR-SERVICE.png"},
    {"id":"1", "img":"CityProfessionals/BIKE-POPULAR-SERVICE.png"},
    {"id":"1", "img":"CityProfessionals/CLEANING-POPULAR-SERVICE.png"}
  ];

  const popularServicesGrid = document.getElementById('popular-services-grid');

  jsonData5.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('popular-service');

    const image = document.createElement('img');
    image.src = service.img;
    image.alt = "Service Image";

    serviceDiv.appendChild(image);

    popularServicesGrid.appendChild(serviceDiv);
  });