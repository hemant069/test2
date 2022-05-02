// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.getElementById('navbar').innerHTML=navbar();

let search=(e)=>{
    if(e.key==='Enter')
    
    searchbar()
   
}

document.getElementById('search_input').addEventListener('keydown',search)

async function searchbar(){
  
   
    let query=document.getElementById('search_input').value
try{
 
let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)

let data=await res.json()
console.log(data)


appendData(data)
arr.push(data)
localStorage.setItem('data',JSON.stringify)
}
catch(err){
    console.log(err)
}

}

function appendData(data){
    document.getElementById('results').innerHTML=null
    console.log(data)
    
data.articles.forEach(function(ele){
    let box=document.createElement('div');
    let title=document.createElement('p');
    title.innerText=ele.title;
    let content=document.createElement('p');
    content.innerText=ele.content;
    let img=document.createElement('img');
    img.src=ele.urlToImage;
    box.append(img,title,content)
    document.getElementById('results').append(box)
    })
    }


let sidebar=document.getElementById('sidebar').children
// console.log(sidebar)
function direct(){
   
console.log(this.id)
  
}
for(let i of sidebar){
    i.addEventListener('click',direct)
}


