const ApiKey = '1QZRFQlmZgAIbOIemdBJrTcyUOBvPhov'

const Request1 = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ApiKey}`)

Request1
    .then(resp => resp.json())
    .then(({data})=>{
        const {url}=data.images.original;
console.log(url)
const img2=document.createElement('img');
// const img2=document.querySelector('div.contenedor_imagen');
img2.src=url;
document.body.append(img2);
    })
    
.catch(console.log(console.warn))