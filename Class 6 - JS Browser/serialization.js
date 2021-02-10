let user = {
    name : "Shane",
    job : "instructor"
  };
  
  let storeUser = JSON.stringify(user);
  
  localStorage.setItem('userInfo', storeUser);
  
  localStorage.getItem('userInfo');
  // "{"name":"Shane","job":"instructor"}"
  
  let parsedData = localStorage.getItem('userInfo');
  
  console.log(parsedData);
  // {"name":"Shane","job":"instructor"}