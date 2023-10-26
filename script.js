

// used for the html and css
function onReady() {
  console.log('jvjr');
  //document is the html file
      let header = document.querySelector('h1');
      //document.querySelector('.class');
      //document.gotElementById('container")
  console.log(header);
  //manipulate
  header.classList.add('pink-text');
  //header.classList.remove('pink-text')
  //header.classList.toggle('pink-text')
  
  header.textContent = 'hello from javascript';
  }
  
  function deletePotato(event) {
      //event.target is where the click happened
      console.log('delete potato', event.target);
  
  event.target.remove();
  
  }
  
  function onPotatoClick() {
      console.log('you click potato');
  
  let PotatoFarm = document.getElementById('PotatoFarm');
  
  PotatoFarm.innerHTML += `<p onclick="deletePotato(event)">💩</p>`;
  
  }
  
  function deleteUni(event) {
      console.log('delete uni', event.target);
  
      event.target.remove();
  
  }
  
  function onUniClick() {
      console.log('you click uni');
  
      let uniPen = document.getElementById('PotatoFarm');
  
      uniPen.innerHTML += `<p onclick="deleteUni(event)">😈</p>`;
  }
  
  
  
// Will call onReady() when the page loads.
  
  onReady()
  