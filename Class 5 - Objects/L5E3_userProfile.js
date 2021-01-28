function UserProfile(name, address, city,state,zip,avatar) { //Constructor
    this.name =  'Jax',
    this.address = 'Main Street',
    this.city = 'Fort Mill',
    this.state = 'SC',
    this.zipcode = '29965',
    this.avatar = 'me.png'
}
        
    UserProfile.prototype.getProfileUpdate = function () {
        return {
            name : "Jamie",
            city: "Charlotte",
            state: "NC"
        }
    }
    
    UserProfile.prototype.updateProfile = function(updates) {
        return Object.assign(this, updates);
    }
    
    
    var userKen = new UserProfile('Ken', '123 Main Street', 'Atlanta', 'GA', '30319', 'superman.jpg'); //Initialize a new object
    console.log("--Original Profile--");
    console.log("1 ",userKen);
    var updates = userKen.getProfileUpdate(); //Get an update on the profile
    console.log("--Updates--");
    console.log("2 ", updates);
    userKen.updateProfile(updates); //Update the profile
    
    console.log("--Profile has been updated--");
    console.log("3 ", userKen);
    console.log(UserProfile)
