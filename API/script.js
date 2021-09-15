

let apiKey = 'ea21939548df4a25870eeb893bb13dcd';

const nabil = (id) => {
  fetch(`https://api.football-data.org/v2/teams/${id}/matches/`, { headers: { 'X-Auth-Token': apiKey } })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.matches)
      let a = document.querySelector('.display ul');
      data.matches.forEach(game => {
        console.log(game.homeTeam.name + " vs " + game.awayTeam.name);
        a.insertAdjacentHTML("beforeend", `<li>${game.homeTeam.name + " vs " + game.awayTeam.name}</li>`)
      })
    });

}

async function clickMatch() {

  let equipe = document.querySelectorAll(".teamName")
  console.log(equipe)
  equipe.forEach((x) => {
    x.addEventListener("click", (event) => {
      nabil(x.dataset.id)
    })
  })
}

async function initPage() {

  // PREMIERE LEAGUE
  await fetch('https://api.football-data.org/v2/competitions/PL/teams', { headers: { 'X-Auth-Token': apiKey } })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.teams);
      let a = document.querySelector('.team-pl ul')
      data.teams.forEach(team => {
        // console.log(team.name)
        a.insertAdjacentHTML("beforeend", `<li class="teamName" data-id=${team.id}>${team.name}</li>`)
      });


    });




  // // //LALIGA
  await fetch('https://api.football-data.org/v2/competitions/PD/teams', { headers: { 'X-Auth-Token': apiKey } })
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.teams);
      let a = document.querySelector('.team-laLiga ul')
      data.teams.forEach(team => {
        // console.log(team.name)
        a.insertAdjacentHTML("beforeend", `<li class="teamName" data-id=${team.id}>${team.name}</li>`)
      });

    });



  // // //SERIE A
  await fetch('https://api.football-data.org/v2/competitions/SA/teams', { headers: { 'X-Auth-Token': apiKey } })
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.teams);
      let a = document.querySelector('.team-serieA ul')
      data.teams.forEach(team => {
        // console.log(team.name)
        a.insertAdjacentHTML("beforeend", `<li class="teamName" data-id=${team.id}>${team.name}</li>`)
      });

    });


  // //BUNDESLIGA
  await fetch('https://api.football-data.org/v2/competitions/BL1/teams', { headers: { 'X-Auth-Token': apiKey } })
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.teams);
      let a = document.querySelector('.team-bundesliga ul')
      data.teams.forEach(team => {
        // console.log(team.name)
        a.insertAdjacentHTML("beforeend", `<li class="teamName" data-id=${team.id}>${team.name}</li>`)
      });

    });



  // //LIGUE 1 
  await fetch('https://api.football-data.org/v2/competitions/FL1/teams', { headers: { 'X-Auth-Token': apiKey } })
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.teams);
      let a = document.querySelector('.team-ligue1 ul')
      data.teams.forEach(team => {
        // console.log(team.name)
        a.insertAdjacentHTML("beforeend", `<li class="teamName" data-id=${team.id}>${team.name}</li>`)
      });

    });
  await clickMatch()
}

initPage()















