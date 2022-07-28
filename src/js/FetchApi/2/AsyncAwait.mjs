const GetImage=async()=>{
   try {
    const ApiKey2 = '1QZRFQlmZgAIbOIemdBJrTcyUOBvPhov'
    const Respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ApiKey2}`)
    const {data}=await Respuesta.json()
    const {url}=await data.images.original
    console.log(url)
    const img=document.createElement('img');
    img.src=url;
    document.body.append(img);
   } catch (error) {
    error=>console.warn(error)
   }
}
GetImage()

// Request1
//     .then(resp => resp.json())
//     .then(({data})=>{
//         const {url}=data.images.original;
// console.log(url)

//     })
    
// .catch(console.log(console.warn))