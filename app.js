$(document).ready(()=>{
    $('.reponse').hide();

    $('a').on('click', (e)=>{
        $(e.target).parent().next().slideToggle().css('color', 'green')
        if($(e.target).text() == "Voir la reponse"){
            $(e.target).text("Cacher la reponse")
        } else {
            $(e.target).text("Voir la reponse")
        }
    })
})

//pour pouvoir recuperer la position de la personne
window.navigator.geolocation.getCurrentPosition((data)=>{
    console.log(data);
})