'strict mode'


// mi creo gli oggetti
const officeWorker1 = {
    fullName: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
}

const officeWorker2 = {
    fullName: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
}

const officeWorker3 = {
    fullName: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
}

const officeWorker4 = {
    fullName: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
}

const officeWorker5 = {
    fullName: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
}

const officeWorker6 = {
    fullName: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
}

// mi creo l'array di oggetti
const team = [officeWorker1, officeWorker2, officeWorker3, officeWorker4, officeWorker5, officeWorker6];

for (let i = 0; i < team.length; i++) {
    console.log(team[i].fullName, team[i].role, team[i].image);
    // Inserisco le informazioni sul dom
    let teamHomepage = document.getElementById('teamList');
    let liTeam = document.createElement('li');
    liTeam.classList.add('card');
    teamHomepage.append(liTeam);
    let divText = document.createElement('div');
    let name = document.createElement('h3');
    let roleElement = document.createElement('p');
    let photo = document.createElement('img');
    divText.append(name);
    divText.append(roleElement);
    liTeam.append(divText);
    name.innerHTML = team[i].fullName;
    roleElement.innerHTML = team[i].role;
    liTeam.append(photo);
    photo.src = `../img/${team[i].image}`



}