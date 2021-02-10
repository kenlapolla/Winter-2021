fetch('http://jsonplaceholder.typicode.com/todos/1')
  .then(response =>  {
      response.json();
      throw new Error("This no worky");
    })
  .then(data => console.log(data))
  .catch((err) => console.log(err, "Booo")
);