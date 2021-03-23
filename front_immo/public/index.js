
const createImmo = (immoType) => {
    event.preventDefault();
    fetch(`http://localhost:3000/immo/${immoType}`, {
        method: 'post',
        body: JSON.stringify({
            titre: document.getElementById('titre').value,
            description: document.getElementById('description').value,
            adresse: document.getElementById('adresse').value,
            code_postal: parseInt(document.getElementById('code_postal').value),
            ville: document.getElementById('ville').value,
            price: parseInt(document.getElementById('price').value),
        }),
        headers: {
            'Content-type': 'application/json',
        }
    })
        .then((data) => data.json())
        .then((dataJson) => {
            window.location.replace(`http://localhost:4000/voir-${immoType}/${dataJson._id}`);
        })
        .catch((err) => console.log(err));
}

const editImmo = (immoType, id) => {
    event.preventDefault();
    const z = confirm("Confirmez-vous l'édition ?");
    if (z === true) {
        fetch(`http://localhost:3000/immo/${immoType}/${id}`, {
            method: 'put',
            body: JSON.stringify({
                titre: document.getElementById('titre').value,
                description: document.getElementById('description').value,
                adresse: document.getElementById('adresse').value,
                code_postal: parseInt(document.getElementById('code_postal').value),
                ville: document.getElementById('ville').value,
                price: parseInt(document.getElementById('price').value),
            }),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((data) => data.json())
            .then((dataJson) => {
                window.location.replace(`http://localhost:4000/voir-${immoType}/${dataJson._id}`);
            })
            .catch((err) => console.log(err));
    }
}

const deleteImmo = (immoType, id) => {
    event.preventDefault();
    const z = confirm("Confirmez-vous la suppression ?");
    if (z === true) {
        fetch(`http://localhost:3000/immo/${immoType}/${id}`, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((data) => data.json())
            .then((dataJson) => {
                window.location.replace(`http://localhost:4000/agence/${immoType}s`);
            })
            .catch((err) => console.log(err));
    }
}