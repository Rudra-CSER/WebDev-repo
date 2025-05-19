const clock = document.getElementById('clock')


setInterval(function(){
    const time = new Date()
    clock.innerHTML = `<span>${time.toLocaleTimeString()}</span>`
},1000)