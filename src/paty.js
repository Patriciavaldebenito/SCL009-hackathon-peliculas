$(document).ready(function(){
    //alert();
})



let pelisUser="";

function jumbotron() {

    let promiseIds = ["tt6320628"];

    fetch( "https://www.omdbapi.com/?&type=movie&apikey=8f338895" + "&i=" + promiseIds)

    .then((response) => (response.json()))

    .then(elemento => {

        document.getElementById('containerXx').innerHTML += `<p class="lead text-center" >${elemento.Title}</p>    
                                                              <hr class="my-4" /> 
                                                               <p id="tituloSpiderman" class="lead text-center actoresPromise">Actores : ${elemento.Actors}</p> 
                                                               <p id="parrafoExplicativo" class="lead text-center actoresPromise">Ya tienen fecha de estreno ¡   ${elemento.Released}   !</p>
                                                              `
      
    })

}
jumbotron();

window.jumbotron =jumbotron;




function tmdb(pelisUser){

    // let shear ="";
    // let baseURL ='https://api.themoviedb.org/3/search/movie';
    // const APIKEY = '5faee2064bdc3c8db44fd5878c5fdd94';
    let urlTmdb= "https://api.themoviedb.org/3/search/movie?api_key=5faee2064bdc3c8db44fd5878c5fdd94&language=en-US&include_adult=false" + "&query=" + pelisUser;
    fetch(urlTmdb)

    .then((response) => (response.json()))

    .then((data)=>{
        console.log(data)
        console.log(data.results)
        console.log(data.results)

        let conjuntoBusqueda = data.results;
       

        conjuntoBusqueda.forEach(element => {

            let urlImg = "http://image.tmdb.org/t/p/w200"+ element.poster_path;

             document.getElementById('searching').innerHTML += `
             <div class="card mb-3" style="max-width: 650px;">
               <div class="row no-gutters">

                    <div class="col-md-4">
                       <img src="${urlImg}" class="card-img" alt="...">
                    </div>

                    <div class="col-md-8">
                       <div class="card-body">
                          <h5 class="card-title">${element.title}</h5>
                          <p class="card-text">${element.overview}</p>
                          <p class="card-text"><small class="text-muted">${element.release_date}</small></p>
                       </div>
                    </div>
               </div>
             </div> `
        });
    })
}



document.getElementById('botonBuscar').addEventListener('click',()=>{
  let pelisUser = document.getElementById("pelisUser").value;
    tmdb(pelisUser);
})


function comicSearch(comicMarvel){
    let urlComic = "https://gateway.marvel.com:443/v1/public/comics?format=comic&title="+ comicMarvel+"&apikey=42e10e19b415cd2a01f61609cb9afa19";
    
    fetch(urlComic)

    .then((response) => (
        
        
        console.log(response.json())
        
        ))

    .then((data)=>{
        console.log(data);
    

        // let conjuntoBusqueda = data.results;
       

        // conjuntoBusqueda.forEach(element => {

        //     let urlImg = "http://image.tmdb.org/t/p/w200"+ element.poster_path;

        //      document.getElementById('searching').innerHTML += `
        //      <div class="card mb-3" style="max-width: 650px;">
        //        <div class="row no-gutters">

        //             <div class="col-md-4">
        //                <img src="${urlImg}" class="card-img" alt="...">
        //             </div>

        //             <div class="col-md-8">
        //                <div class="card-body">
        //                   <h5 class="card-title">${element.title}</h5>
        //                   <p class="card-text">${element.overview}</p>
        //                   <p class="card-text"><small class="text-muted">${element.release_date}</small></p>
        //                </div>
        //             </div>
        //        </div>
        //      </div> `
        });

}

document.getElementById('imprimiendoTmdb').addEventListener('click',()=>{
    getMarvelResponse();
})



// function tplawesome(e,t){res=e;for(var n)}


function aa(){

    $('form').on('submit',function(e){
        e.preventDefault();

        varrequest = gabi.client.youtube.search.list({
            part:'snippet',
            type:'video',
            q: encodeURIComponent($('#search').val()).replace(/%20/g,"+"),
            maxResults:3,
            order:'viewCount',
            publishedAfter:""

        });

        request.execute(function(response){
            console.log(response);
        })
    })
}
aa();

function init(){
    gapi.client.setApiKey('AIzaSyBBzB-teZ8ZwC9dnIJqmnGBAKepYfB126E');
    gabi.client.load('youtube','v3',function(){

    })
}