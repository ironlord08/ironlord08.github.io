const requestURL = './data/rentalInfo.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++) {
            let newRow = document.createElement('tr');
            let imageCol = document.createElement('td');
            let image = document.createElement('img');
            let type = document.createElement('td');
            let maxRiders = document.createElement('td');
            let halfRes = document.createElement('td');
            let fullRes = document.createElement('td');
            let halfWalk = document.createElement('td');
            let fullWalk = document.createElement('td');

            type.textContent = rentals[i].type;
            maxRiders.textContent = rentals[i].maxRider;
            halfRes.textContent = rentals[i].halfRes;
            fullRes.textContent = rentals[i].fullRes;
            halfWalk.textContent = rentals[i].halfWalk;
            fullWalk.textContent = rentals[i].fullWalk;
            image.setAttribute('src', rentals[i].image);
            image.setAttribute('alt', rentals[i].type);

            newRow.appendChild(imageCol);
            imageCol.appendChild(image);
            newRow.appendChild(type);
            newRow.appendChild(maxRiders);
            newRow.appendChild(halfRes);
            newRow.appendChild(fullRes);
            newRow.appendChild(halfWalk);
            newRow.appendChild(fullWalk);
            // newRow.setAttribute("class", "card")
            document.querySelector('.rentalData').appendChild(newRow);
        }

        
    });
