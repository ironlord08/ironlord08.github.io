const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing
        let towns = jsonObject['towns'];
        if (document.querySelector(".active").textContent == "Home") {
            towns = towns.filter(town => (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven"))
            towns.forEach(town => {

                let card = document.createElement('section');
                let sect = document.createElement('section');
                let h3 = document.createElement('h3');
                let motto = document.createElement('h4');
                let yearfounded = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                h3.textContent = town.name;
                motto.textContent = town.motto;
                yearfounded.textContent = `Year Founded: ${town.yearFounded}`;
                population.textContent = `Population: ${town.currentPopulation}`;
                rain.textContent = `Average Rainfall: ${town.averageRainfall}`;
                image.setAttribute('src', `images/${town.photo}`);
                image.setAttribute('alt', `Photo of ${town.name}, Idaho`);

                sect.appendChild(h3);
                sect.appendChild(motto);
                sect.appendChild(yearfounded);
                sect.appendChild(population);
                sect.appendChild(rain);
                card.appendChild(sect);
                card.appendChild(image);
                card.setAttribute("class", "card");
                sect.setAttribute("class", "cardData");
                document.querySelector('div.cards').appendChild(card);
            });
        } else if (document.querySelector(".active").textContent == "Preston") {
            let preston = towns.filter(town => (town.name == "Preston"));
            let count = 1;
            preston[0].events.forEach(event => {
                let x = document.createElement("li");
                x.setAttribute('id', `event${count}`);
                x.textContent = event;
                document.querySelector(".events").appendChild(x);
                count++;
            });
        } else if (document.querySelector(".active").textContent == "Soda Springs") {
            let soda = towns.filter(town => (town.name == "Soda Springs"));
            let count = 1;
            soda[0].events.forEach(event => {
                let x = document.createElement("li");
                x.setAttribute('id', `event${count}`);
                x.textContent = event;
                document.querySelector(".events").appendChild(x);
                count++;
            });
        } else if (document.querySelector(".active").textContent == "Fish Haven") {
            let fish = towns.filter(town => (town.name == "Fish Haven"));
            let count = 1;
            fish[0].events.forEach(event => {
                let x = document.createElement("li");
                x.setAttribute('id', `event${count}`);
                x.textContent = event;
                document.querySelector(".events").appendChild(x);
                count++;
            });
        }
    });