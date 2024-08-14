app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="review-container"> <!-- could use 'v-show="reviews.length > 0"' instead of v-if in component display -->
        <h3>Reviews</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }} gave this {{ review.rating }} stars
                    <br/>
                    "{{ review.review }}"
                    <br/>
                    <span v-if="review.recommended" class="review">{{ review.name }} recommends this product</span>
                    <span v-else class="review">{{ review.name }} doesn't recommend this product</span>
                    <br/>
                    _______________________________________________________________
                </li>
            </ul>
    </div>
    `
})