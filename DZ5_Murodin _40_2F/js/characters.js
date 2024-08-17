                                  const xhr = new XMLHttpRequest();
                                  xhr.open('GET', 'persons.json', true);
                                  xhr.onload = function() {
                                  if (xhr.status === 200) {
                                const persons = JSON.parse(xhr.responseText);
                                console.log(persons);

                        const container = document.getElementById('cards-container');
                        persons.forEach(persons => {
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.innerHTML = `
                            <img src="${persons.person_photo}" alt="${persons.name}">
                            <h2>${persons.name}</h2>
                            <p>Age: ${persons.age}</p>
                            <p>Occupation: ${persons.occupation}</p>
                        `;
                        container.appendChild(card);
                    });
                }
            };
        xhr.send();