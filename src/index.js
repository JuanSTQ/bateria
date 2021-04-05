(function App(){
    const items = [...document.querySelectorAll('.container__items')]

    
    const action = (event)=>{
      if(event.currentTarget.nodeName == "DIV"){
        const node = event.currentTarget.lastElementChild;
        let content = node.textContent.toLowerCase() ;
        let audio = document.querySelector(`.${content}`);
        const container = document.querySelector(`div[id="${event.currentTarget.id}"]`)
        container.style.border = "wheat 13px solid";
        audio.currentTime = 0;
        audio.play();
        setTimeout( ()=>{container.style.border = "wheat 3px solid"},150);
      }
      if(event.type=== "keydown"){
        let audio = document.querySelector(`audio[id="${event.keyCode}"]`);
        const container = document.querySelector(`div[id="${event.keyCode}"]`)

        if(audio){
          container.style.border = "wheat 13px solid";
          audio.currentTime = 0;;
          audio.play();
          setTimeout( ()=>{container.style.border = "wheat 3px solid"},150);
        }

      }
    }

    items.forEach((node)=>{
      node.addEventListener('click',action)
    
    })
    document.addEventListener('keydown', action)

})()