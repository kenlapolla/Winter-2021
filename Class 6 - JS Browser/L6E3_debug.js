// More Debugging!

// Same as before, work through this code using the Developer Debugging tools

let woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1,
      "location": "down the lane"
    }
  ];
  
  
  let bags = haveYouAnyWool;
  
  let haveYouAnyWool = function() {
      for (let i = 0; i < woolOwners.length; i++) {
      let totalBags = totalBags + i;
      }
      return (i);
  };
  
  
  function baabaaBlackSheep() {
      console.log("BaaBaa BlackSheep have you any wool?");
      if (bags > 0) {
          console.log("yes sir, yes sir " + totalBags + " bags full");
    }
  }
  
  function oneForMy() {
      for (let i = 0; i < 2; i++) {
          people = Object.keys(woolOwners);
          let person = people.toString();
          console.log("one for my " + person);
      }
  }
  
  baabaaBlackSheep();
  oneForMy();
  
  let boy = Object.keys(woolOwners[2]);
  let littleBoy = boy[2];
  
  let whereHeLives = littleBoy.location;
  console.log("one for the " + littleBoy + " that lives " + whereHeLives);