const LibraryComponent = Vue.component('Library', {
    // this function is run AFTER the props have been passed in
    data() {
        return {
            library: new LibraryCollection()
                .addItem(new Book('Hop on Pop', 'Childrens', 72))
                .addItem(new Movie('Star Wars', 'Space Opera', 345))
                .addItem(new Book('Wild Thing', 'Teen', 150))
                .addItem(new Movie('Scarface', 'Drama', 117))
        }
    },

    // values/bindings passed to this component
    props: {},

    // functions that you want to use in your view that are triggered manually
    methods: {},

    // props/data that needs to be calculated when dependencies change
    computed: {},

    // the view
    template: `
        <div class="card-columns">
<!--            <div class="card" v-for="item in library">-->
<!--                <div class="card-body">-->
<!--                    <h3 class="card-title">{{item.title}}</h3>-->
<!--                    <p class="card-text">{{item.genre}}</p>-->
<!--                    <p class="card-text" v-if="item.pages">{{item.pages}}</p>-->
<!--                    <p class="card-text" v-if="item.runningTime">{{item.runningTime}}</p>-->
<!--                </div>-->
<!--            </div>-->
            <library-item v-for="item in library" :item="item"></library-item>
            <p>Checked out: {{library.checkedOutItems().length}}</p>
        </div>`,
});

const LibraryItemComponent = Vue.component('LibraryItem', {
    props: {
        item: Object,
    },

    computed: {
        typeOfItem() {
            return this.item.constructor.name;
        },
    },

    template: `
        <div class="card" :class="item.isAvailable() ? 'border-success' : 'border-warning'">
            <div class="card-body">
                <component :is="typeOfItem" :item="item"></component>
            </div>
            <div class="card-footer">
                <button class="btn btn-secondary" v-if="!item.isAvailable" @click="item.checkOut">Check Out</button>
                <button class="btn btn-secondary" v-else @click="item.checkIn">Check In</button>
                <button class="btn btn-secondary" v-else @click="item.removeItem">Check In</button>
            </div>
        </div>`,
});

const BookComponent = Vue.component('Book', {
    props: {
        item: Book,
    },

    template: `
    <div class="book">
        <h3 class="card-title">{{item.title}}</h3>
        <p class="card-text">{{item.genre}}</p>
        <p class="card-text">{{item.pages}}</p>
    </div>
    `,
});

const MovieComponent = Vue.component('Movie', {
    props: {
        item: Movie,
    },

    template: `
    <div class="movie">
        <h3 class="card-title">{{item.title}}</h3>
        <p class="card-text">{{item.genre}}</p>
        <p class="card-text">{{item.runningTime}}</p>
    </div>
    `,
});