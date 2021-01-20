let slideshow = {
    currentPhotoIndex: 0,
    photoList: ['photo1.png', 'photo2.png', 'photo3.png'],
    nextPhoto: function() {
        let self = this; //Closure Hack
      
        // console.log(self.photoList.length); //3
        if(this.currentPhotoIndex < this.photoList.length-1) {
            this.currentPhotoIndex = this.currentPhotoIndex + 1;
            // console.log(this.photoList[this.currentPhotoIndex]);
            return self.getCurrentPhoto();
        } else {
            return "End of the slideshow";
            
        }
        
        
        
    },
    prevPhoto: function() {
        let self = this; //Closure Hack
        
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex = this.currentPhotoIndex - 1;
            return self.getCurrentPhoto();
        } else {
            return "Beginning of the slideshow";
        }
        // return self.getCurrentPhoto();
    },
    getCurrentPhoto: function() {
        return `The current photo is ${this.currentPhotoIndex} ${this.photoList[this.currentPhotoIndex]}`;
    }

}

console.log(slideshow.getCurrentPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.nextPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());
console.log(slideshow.prevPhoto());


