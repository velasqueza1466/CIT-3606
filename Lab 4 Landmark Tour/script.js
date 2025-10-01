grandcanyon.onclick = function() {
    landmark.src = "images/grandcanyon.jpg";
}
NiagaraFalls.onclick = function() {
    landmark.src = "images/Niagara-Falls.webp";
}
ChristtheRedeemer.onclick = function() {
    landmark.src = "images/ChristtheRedeemer.jpg";
}

if(landmark=="grandcanyon"){
    Image.src="grandcanyon.jpg";
    RTCSessionDescription.innerHTML="Grand Canyon in Arizona";
    mapframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93223.20834520087!2d-79.09101948463483!3d43.099780733403385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d363ea29e633b7%3A0x61975ae4b9c5aab3!2sNiagara%20Falls%2C%20NY!5e0!3m2!1sen!2sus!4v1759162393092!5m2!1sen!2sus";
}

else if(landmark=="NiagaraFalls"){
    Image.src="Niagara-Falls.webp";
    RTCSessionDescription.innerHTML="Niagara Falls in New York";
    mapframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103177.79176878226!2d-112.18732906044075!3d36.08602823084167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80cc0654bd27e08d%3A0xb1c2554442d42e8d!2sGrand%20Canyon!5e0!3m2!1sen!2sus!4v1759162519507!5m2!1sen!2sus"
}

else if(landmark=="ChristtheRedeemer"){
    Image.src="ChristtheRedeemer.jpg";
    RTCSessionDescription.innerHTML="Christ the Redeemer in Rio de Janeiro, Brazil";
    mapframe src=<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9542747621495!2d-43.213062122243365!3d-22.951911039489996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sChrist%20the%20Redeemer!5e0!3m2!1sen!2sus!4v1759162945024!5m2!1sen!2sus"
}