let slideshow = {
    currentPhotoIndex: 0,
    photoList: ['photo1.png', 'photo2.png', 'photo3.png'],
    nextPhoto: function() {
        // let self = this; //Closure Hack
    //   console.log(`Next Photo called ${this.currentPhotoIndex}`);
        // console.log(self.photoList.length); //3
        if(this.currentPhotoIndex < this.photoList.length) {
            
            // console.log(this.photoList[this.currentPhotoIndex]);
            let photo = this.getCurrentPhoto();
            this.currentPhotoIndex = this.currentPhotoIndex + 1;
            return photo;
        } else {
            this.currentPhotoIndex = 0;
            this.pause();
            return "End of the slideshow";
            
        }
       
        
    },
    prevPhoto: function() {
        // let self = this; //Closure Hack
        
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex = this.currentPhotoIndex - 1;
            return this.getCurrentPhoto();
        } else {
            return "Beginning of the slideshow";
        }
        // return self.getCurrentPhoto();
    },
    getCurrentPhoto: function() {
        // console.log(`Get Current Photo has been called ${this.currentPhotoIndex}`);
        return `The current photo is ${this.currentPhotoIndex} ${this.photoList[this.currentPhotoIndex]}`;
    },
    playInterval: null,
 
    play: function() {
        // let self = this;
        let boundFunction = function() {
            // console.log("calling next photo from play");
            console.log(this.nextPhoto());
        }.bind(this);
        this.playInterval = setInterval(boundFunction, 2000)
        return this.playInterval._idleTimeout;
        
    },
 
    pause: function() {
        clearInterval(this.playInterval);
    }

}

// console.log(slideshow.getCurrentPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());
// console.log(slideshow.prevPhoto());
// console.log(slideshow.prevPhoto());
// console.log(slideshow.prevPhoto());

console.log(slideshow.play());


