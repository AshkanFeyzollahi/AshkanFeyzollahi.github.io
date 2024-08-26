let ProjectsButton = document.getElementById("projects_button");
let DetailsButton = document.getElementById("details_button");
let Projects = document.getElementById("projects");
let Details = document.getElementById("details");

function RotateElement(event, element) {
    let x = event.offsetX;
    let y = event.offsetY;

    let middleX = element.clientWidth / 2;
    let middleY = element.clientHeight / 2;

    let offsetX = ((x - middleX) / middleX) * 25;
    let offsetY = ((y - middleY) / middleY) * -25;

    element.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
}

function ResetRotate(element) {
    element.style.transform = `rotateX(0deg) rotateY(0deg)`;
}

ProjectsButton.addEventListener("mousemove", (e) => {
    RotateElement(e, ProjectsButton);
});

ProjectsButton.addEventListener("mouseleave", (e) => {
    ResetRotate(ProjectsButton);
});

DetailsButton.addEventListener("mousemove", (e) => {
    RotateElement(e, DetailsButton);
});

DetailsButton.addEventListener("mouseleave", (e) => {
    ResetRotate(DetailsButton);
});

function scrollIntoProjects() {
    Projects.scrollIntoView({ "behavior": "smooth" });
}

function scrollIntoDetails() {
    Details.scrollIntoView({ "behavior": "smooth" });
}
