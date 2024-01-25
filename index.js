console.log("hi")
let valueDisplays = document.querySelectorAll(".num");
let interval = 1500;

valueDisplays.forEach((valueDisplay) =>{
    let starValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function (){
        starValue +=1;
        valueDisplay.textContent=starValue;
        if(starValue == endValue){
            clearInterval(counter);
        }
    },duration)
});
function createCard(car) {
    const cardContainer = document.getElementById('cars-container');
    const template = document.getElementById('car-template');
    console.log(car);
    // Clone the content of the template
    const card = document.importNode(template.content, true);
    console.log(card);
    // Populate template content with car data
    card.querySelector('.card-title').textContent = car.model;
    card.querySelector('.seating-capacity').textContent = `Seating Capacity: ${car.seater}`;
    card.querySelector('.rental-rate').textContent = `Rental Rate: ₹${car.rental_rate}/day`;

      // Set the image source dynamically based on available file extensions and model name cases
      
      const img = card.querySelector('.card-image');
    img.src = `data:image/jpeg;base64, ${car.picture}`;
    img.alt = 'car';
         
      cardContainer.appendChild(card);
  }
  

function getcars() {
    return fetch('./src/php/fetch_cars.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network related error occurred');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Using the function
getcars().then(data => {
    console.log('Data received:', data);

    // Assuming each item in the data array represents a car
    data.forEach(car => {
        createCard(car);
    });
});

console.log('test');


