//APPELLE DE L'API
const API = "https://api.github.com/users/";
//SELECTIONNES LES ELEMENTS DU DOM 
const resultat = document.querySelector(".resultat");
const form = document.querySelector(".form-github-recherche");
const inp = document.querySelector(".inp-search");

//FUNCTION ASYNCHRONE PERMETANT DE RECUPERER LES DONNES D'UN UTILISATEUR 
async function dataGithub(utilisateur){
    const reponse = await fetch(`${API}${utilisateur}`);
    if(!reponse.ok){
        resultat.innerHTML=`<p class="erreur"> L'utilisateur n'existe pas </p>`;
        return;
    }
    const data = await reponse.json();
    // console.log(data);
   
    //APPELLLE DE LA FONCTION creationCarte
    creationCarte(data);
}


//dataGithub('Tatiana-Juin');

/* 
    FONCTION createCarte() AVEC POUR PARAMETRE user. 
    FONCTION POUR AFFICHER LES DONNES DE L'UTILISATEUR DANS UNE CARD  
*/
function creationCarte(user){
    const carteHTML = `
        <div class="carte">
            <img src=${user.avatar_url} alt="avatar" class="avatar">
            <h2> ${user.login} </h2>
            <ul class="cont-infos">
                <li class="follow"> Followers : ${user.followers} </li>
                <li class="etoiles"> Repos : ${user.public_repos} </li>
                <li class="bio"> biographie : ${user.bio} </li>
                
            </ul>
        </div>
    `;
    resultat.innerHTML = carteHTML;
}

//FONCTION POUR LA  EFFETUER LA RECHERCHE D'UN UTILISATEUR  
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    if(inp.value.length > 0){
        dataGithub(inp.value);
        inp.value = "";
    }
    
})