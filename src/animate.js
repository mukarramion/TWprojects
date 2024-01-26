const observe = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
      const elements =entry.target.querySelectorAll('[data-animation]')
      elements.forEach(element=>{
        var animation = element.getAttribute("data-animation");
        console.log(entry.intersectionRatio);
        if(entry.isIntersecting ){
          element.classList.add('animate__'+animation)
          return
        }
        else{
          element.classList.remove('animate__'+animation)
        }
      })
     
    })
  })

  observe.observe(document.querySelector('.cars-wrapper'))
  observe.observe(document.querySelector('.link-wrapper'))
