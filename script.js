async function getResponse(){
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let content =  await response.json()
    content = content.splice(0,10)

    let list = document.querySelector('.content')




    let key;
    for (key in content) {
        list.innerHTML +=  `<div class="content">
        <h1>${content[key].title}Название Изображения</h1>
        <img src="${content[key].url}/img/placeholder-800x600.png" alt="" srcset="">
    </div>`
    }
}

getResponse()