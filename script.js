document.addEventListener("DOMContentLoaded", function() {
    fetch('dates.json')
        .then(response => response.json())
        .then(data => {
            const dateList = document.getElementById("date-list");
            data.dates.forEach(date => {
                const dateCard = document.createElement("div");
                dateCard.classList.add("date-card");
                dateCard.innerHTML = `
                    <img src="${date.image}" alt="${date.name}">
                    <h2>${date.name}</h2>
                    <p>${date.description}</p>
                    <p><strong>Price:</strong> ${date.price}</p>
                    <a href="${date.link}" target="_blank">Visit Website</a>
                `;
                dateList.appendChild(dateCard);
            });
        })
        .catch(error => console.error("Error loading date ideas:", error));
});
