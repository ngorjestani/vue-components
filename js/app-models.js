// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

function LibraryCollection() {
    let arr = [];

    arr.addItem = function(item){
        this.push(
            new LibraryItem(
                item,
                // (item) => this.removeItem(item)
                ((collection) => function(){
                    //The library item will call this function
                    collection.removeItem(this)
                })(this)
            )
        );

        return this;
    }

    arr.checkedOutItems = function() {
        return this.filter(function(item){
            return !item.isAvailable();
        });
    }

    arr.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return arr;
}

//pre ES6
LibraryCollection.prototype = [];
LibraryCollection.prototype.constructor = LibraryCollection;

// Models are usually prototypes (similar to classes if you are familiar with those)
function LibraryItem(media, removeMethod) {
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'};

    //Decorate existing objects with LibraryItem functionality
    this.status = STATUSES.CHECKED_IN;

    media.checkIn = function () {
        this.status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function () {
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function () {
        return this.status === STATUSES.CHECKED_IN;
    }

    // media.remove = function(){
    //     removeMethod(this);
    // }

    media.remove = removeMethod || function(){};

    return media;
}

/*let book = new LibraryItem('Hop on Pop', 'Childrens', 72);
let movie = new LibraryItem('Star Wars', 'Space Opera', null, 345)*/

function Book(title, genre, pages) {
    this.title = title || 'Default Title';
    this.genre = genre || '';
    this.pages = pages;
}


class Movie {
    constructor(title, genre, runningTime) {
        this.title = title || 'Default Title';
        this.genre = genre || '';
        this.runningTime = runningTime;
    }
}




