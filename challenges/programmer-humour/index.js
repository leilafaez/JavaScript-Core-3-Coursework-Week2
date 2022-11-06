let url = "https://xkcd.now.sh/?comic=latest";

fetch(url).then((response)=>{
  return  response.json();
  
}).then((data)=>{
    console.log(data);
    let image= document.createElement("img");
    image.src = data.img;
    document.body.appendChild(image);
}).catch(error=>console.log(error));