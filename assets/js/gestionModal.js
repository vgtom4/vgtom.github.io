const modal = document.querySelector("dialog");

var previousTemplate = null;
// Écouteur d'événement pour ouvrir le modal lorsque le div de projet est cliqué
const projectDivs = document.querySelectorAll("[needModal]");

// Permet de récupérer le contenu du template du projet, de l'afficher dans le modal et d'ouvrir le modal
projectDivs.forEach(projectDiv => {
    projectDiv.addEventListener("click", () => {
        const projectId = projectDiv.getAttribute("data-project-id");
        const projectTemplate = projectTemplates[projectId];
        if (previousTemplate!=projectTemplate){
            previousTemplate = projectTemplates[projectId];
            if (projectTemplate) {
                const projectDetails = document.getElementById("project-details");
                projectDetails.innerHTML = projectTemplate;
            }
        } 
        if (projectTemplate) {
            modal.showModal();
        }
        
    });
});

// Écouteur d'événement pour fermer le modal lorsque l'utilisateur clique sur le bouton de fermeture
const closeButtons = document.querySelectorAll("[close-modal]");
closeButtons.forEach(closeButton => {
    closeButton.addEventListener("click", () => {
        modal.close();
    });
});

// Écouteur d'événement pour fermer le modal lorsque l'utilisateur clique à l'extérieur du modal
modal.addEventListener("click", event => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (event.clientX < dialogDimensions.left || event.clientX > dialogDimensions.right || event.clientY < dialogDimensions.top || event.clientY > dialogDimensions.bottom) {
        modal.close();
    }
});