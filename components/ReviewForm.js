app.component('review-form', {
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit"> <!--  .prevent is another modifier which prevent the browser refresh -->
        <h3>Leave a review</h3>
        <label for="name">Name: </label> <!-- v-model create a two-way binding between data and render -->
        <input id="name" v-model="name">

        <label for="review">Review: </label>
        <textarea id="review" v-model.number="review"></textarea> <!--  .number is a modifier that casts the value as a number -->

        <label for="rating">Rating: </label>
        <select id="rating" v-model="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="recommended">Would you recommend this product ?</label>
        <input type="checkbox" v-model="recommended" @click="changeRecommended">
        <span class="slider round"></span>

        <input class="button" type="submit" value="Submit">
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommended: false
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null){
                alert('Review is incomplete. Please fill out every fields.')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommended: this.recommended
            }

            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.recommended = false
        },
        changeRecommended(){
            this.recommended = !this.recommended
        }
    }
})