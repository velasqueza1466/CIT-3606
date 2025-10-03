let landmarkimage = document.getElementById("landmarkimage");
let description = document.getElementById("description");
let landmarkmap = document.getElementById("landmarkmap");


grandcanyon.onclick = function() {
    landmarkimage = "grandcanyon.jpg";
    description.innerHTML = "Grand Canyon in Arizona is a natural World Wonder";
    landmarkmap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650862.5047094007!2d-114.16241786161527!3d36.0851788614578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873312ae759b4d15%3A0x1f38a9bec9912029!2sGrand%20Canyon%20National%20Park!5e0!3m2!1sen!2sus!4v1759459283674!5m2!1sen!2sus";
}
NiagaraFalls.onclick = function() {
    landmark.src = "Niagara-Falls.webp";
    description.innerHTML = "Niagara Falls in New York is a famous waterfall and tourist attraction";
    landmarkmap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93223.20834520087!2d-79.09101948463483!3d43.099780733403385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d363ea29e633b7%3A0x61975ae4b9c5aab3!2sNiagara%20Falls%2C%20NY!5e0!3m2!1sen!2sus!4v1759459391729!5m2!1sen!2sus";
}
ChristtheRedeemer.onclick = function() {
    landmark.src = "ChristtheRedeemer.jpg";
    description.innerHTML = "Christ the Redeemer in Rio de Janeiro, Brazil is a famous statue and tourist attraction";
    landmarkmap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9542747621495!2d-43.213062122243365!3d-22.951911039489996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sChrist%20the%20Redeemer!5e0!3m2!1sen!2sus!4v1759459500196!5m2!1sen!2sus";
}

