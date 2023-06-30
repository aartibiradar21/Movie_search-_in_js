const xhr= new XMLHttpRequest();

const form=document.getElementsByTagName("form")[0];
form.onsubmit=function(){
    let movie_id=document.getElementsByTagName("input")[0].value;
    
    xhr.open("GET",`http://www.omdbapi.com/?apikey=92a1f21&t=${movie_id}`);
    xhr.onloadend=postAjaxFunction;
    xhr.send();
    
    return false;
}
let postAjaxFunction=function(){
    if (xhr.status===200){
        let response=JSON.parse(xhr.responseText);
        let movie_name=response.Title;
        let year=response.Year;
        let director=response.Director;
    
         
        document.getElementById("movie_name").innerHTML=movie_name;
        document.getElementById("year").innerHTML=year;
        document.getElementById("director").innerHTML=director;
   
    } else{
         
    }
};
     
                 
         
