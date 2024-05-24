
function goToSection(sectionId){
    var section = document.getElementById(sectionId);
    if (section.style.display == "none"){
        if (sectionId == 'proj'){
            section.style.display = "grid";
            document.getElementById('about').style.display = "none";
            document.getElementById('cont').style.display = "none";
            document.getElementById('intro').style.display = "none";
        }
        if (sectionId == 'about'){
            section.style.display = "block";
            document.getElementById('proj').style.display = "none";
            document.getElementById('cont'). style.display = "none";
            document.getElementById('intro').style.display = "none";
        }
        if (sectionId == 'cont'){
            section.style.display = "block";
            document.getElementById('about').style.display = "none";
            document.getElementById('proj').style.display = "none";
            document.getElementById('intro').style.display = "none";
        }
        if (sectionId == 'intro'){
            section.style.display = "flex";
            document.getElementById('about').style.display = "none";
            document.getElementById('cont').style.display = "none";
            document.getElementById('proj').style.display = "none";
        }
    }
    else {
        
            section.style.display = "none";
        }
}

var img = document.getElementById('fleche');
    var menu = document.getElementById('call');

    img.addEventListener('click', function() {
        if (menu.style.display == 'none') {
            menu.style.display = 'block'; 
            img.style.display = "none";
        } else {
            menu.style.display = 'none'; 
        }
    });

