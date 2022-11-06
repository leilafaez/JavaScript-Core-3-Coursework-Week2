let url = "https://dog.ceo/api/breeds/image/random";
fetch(url).then(function(response){
   return response.json();
}).then(data=>{
    console.log(data);
    let container = document.getElementById("image-container");
     let buttonShow = document.getElementById("show-image");
     let ulElement = document.createElement("ul");
     let listItem = document.createElement("li");
     let image = document.createElement("img");
      container.appendChild(ulElement);
    buttonShow.addEventListener("click",()=>{
      image.src=data.message;
         ulElement.appendChild(listItem);
        listItem.appendChild(image);
        
        setTimeout(()=>{
            location.reload();
            container.innerHTML="";
        },2000);
        
    })
}).catch((error)=>console.log(error));