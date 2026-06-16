const detect = new IntersectionObserver((entry)=>{
    entry.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })

}, {})

const todo = document.querySelectorAll("div")
todo.forEach(el => detect.observe(el))