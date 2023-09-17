
//Pages
//--------------------------------------------------
fetch("/assets/pages/navbar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });
//--------------------------------------------------
fetch("/assets/pages/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
//--------------------------------------------------

//--------------------------------------------------
fetch("/assets/pages/search.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("searchbar").innerHTML = data;
  });
//--------------------------------------------------
fetch("/assets/pages/search1.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("searchbar1").innerHTML = data;
  });
//--------------------------------------------------

fetch("/Certificate/Round/Round_9.0mm.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("CRO").innerHTML = data;
  });
//--------------------------------------------------


function redirect(ele) {
  if(event.key === 'Enter') {
      if(ele.value === 'google')
      window.location.href = 'https://google.com';
      if(ele.value === '990078567')
      window.location.href = '/Certificates/990078567';

      
      
      else
          alert("Invalid Input");
  }
}

// Pages