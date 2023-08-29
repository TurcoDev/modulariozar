fetch('https://randomuser.me/api/?results=10')
  .then(response => response.json())
  .then( data => {
    console.log(data);
    data.results.forEach(element => {
        document.write(element.name.first);
        console.log(element.name);
    });
});

  