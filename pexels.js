document.addEventListener('DOMContentLoaded', function () {
  const apiKey = 'iv2vdA2Ztsm07MQWxgcb9YxZdd6LNgrc3ArDprvdUthyyKX6xQOcMSvx';
  const apiUrl = 'https://api.pexels.com/v1/search';

  const loadImagesButton = document.querySelector('.btn-primary');
  const loadSecondaryImagesButton = document.querySelector('.btn-secondary');
  const searchInput = document.querySelector('#searchInput');
  const cardsContainer = document.querySelector('.album .row');

  loadImagesButton.addEventListener('click', function () {
    loadImages('landscape');
  });

  loadSecondaryImagesButton.addEventListener('click', function () {
    loadImages('cars');
  });

//   
// ho provato un altro metodo ma non mi é venuto

//   const primaryButton = document.querySelector('.btn-primary')
//   primaryButton.addEventListener('click', () => loadImages('landscape'))
  
//   const secondaryButton = document.querySelector('.btn-secondary')
//   secondaryButton.addEventListener('click', () => loadImages('cars'))
  
//   const searchForm = document.getElementById('custom-search')
//   searchForm.addEventListener('submit', function (e) {
//     e.preventDefault()
    
//     const searchBar = document.getElementById('search-field')
//     const searchValue = searchBar.value
//     loadImages(searchValue) 
//   })
//   let cardsContainer = document.querySelector('.album .row');


  
  function loadImages(query) {
    const fullUrl = `${apiUrl}?query=${query}`;
    fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Authorization': apiKey,
      },
    })
      .then(response => response.json())
      .then(data => {
        displayImages(data.photos);
      })
      .catch(error => {
        console.error('Errore durante la richiesta API:', error);
      });
  }



  function displayImages(photos) {
    // svuoto e appendo le card esistenti
    cardsContainer.innerHTML = '';

    photos.forEach(photo => {
      const card = createCard(photo);
      cardsContainer.appendChild(card);
    });
  }



  function createCard(photo) {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${photo.photographer}</h5>
          <p class="card-text">${photo.url}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
            </div>
            <small class="text-muted">${photo.id}</small>
          </div>
        </div>
      </div>
    `;
  
    const hideButton = card.querySelector('.hide-btn');
    hideButton.addEventListener('click', function () {
      card.style.display = 'none';
    });
  
    return card;
  }

  // Aggiungo l'event listener per la ricerca
  searchInput.addEventListener('input', function () {
    const searchQuery = searchInput.value.trim();
    if (searchQuery !== '') {
      loadImages(searchQuery);
    }
  });


//   creo un event listener per permettere di ritornare alla home una volta viste le img generate
  const albumLink = document.getElementById('albumLink');
  albumLink.addEventListener('click', function () {
    window.location.href = 'pexels-start.html'; 


  });
});



document.addEventListener('DOMContentLoaded', function () {
   
  
    const albumLink = document.getElementById('albumLink');
    albumLink.addEventListener('click', function () {
      window.location.href = 'pexels-start.html'; 
    });
  });