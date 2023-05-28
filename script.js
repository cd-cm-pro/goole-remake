const IFL = document.getElementById("IFL")
const search = document.getElementById("search")
IFL.addEventListener("click",function(e){
    e.preventDefault()
    location.href="https://google.com/search?q="+encodeURIComponent(search.value)+"&btnI=1"
})