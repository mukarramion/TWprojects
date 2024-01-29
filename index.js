document.addEventListener("DOMContentLoaded", function() {
    let valueDisplays = document.querySelectorAll(".num");
    let interval = 1500;
   

    const countersObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const valueDisplay = entry.target;
                animateCounter(valueDisplay);
                // countersObserver.unobserve(valueDisplay);
            }
        });
    });

    valueDisplays.forEach(valueDisplay => {
        countersObserver.observe(valueDisplay);
    });

    function animateCounter(valueDisplay) {
        let starValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function() {
            starValue += 1;
            valueDisplay.textContent = starValue;
            if (starValue === endValue) {
                clearInterval(counter);
            }
        }, duration);
    }
    function createCard(car) {
        const cardContainer = document.getElementById('cars-container');
        const template = document.getElementById('car-template');
        const card = document.importNode(template.content, true);

        card.querySelector('.card-title').textContent = car.model;
        card.querySelector('.seating-capacity').textContent = `Seating Capacity: ${car.seater}`;
        card.querySelector('.rental-rate').textContent = `Rental Rate: ₹${car.rental_rate}/day`;

        const img = card.querySelector('.card-image');
        img.src = `data:image/jpeg;base64, ${car.picture}`;
        img.alt = 'car';

        cardContainer.appendChild(card);
    }

    function fetchCars() {
        return fetch('./src/php/fetch_cars.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network related error occurred');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                return data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Using async/await to fetch cars and then create cards
    async function initializeCars() {
        try {
            const data = await fetchCars();
            data.forEach(car => {
                createCard(car);
            });
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    }

    // Initializing cars
    initializeCars();
});
