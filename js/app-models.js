// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those)
function LibraryItem(media) {
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out'};

    this.status = STATUSES.CHECKED_IN;

    this.media = media;

    this.checkIn = function () {
        this.status = STATUSES.CHECKED_IN;
    }

    this.checkOut = function () {
        this.status = STATUSES.CHECKED_OUT;
    }

    this.isAvailable = function () {
        return this.status === STATUSES.CHECKED_IN;
    }
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




