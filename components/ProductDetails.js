app.component('product-details', {
    props: {
        details: {
            type: Array, // Array as PropType<Array<Person>> if we want to be more precise about de Array type
            required: true
        }
    },
    template: 
    /*html*/
    `
    <ul>
        <li v-for="detail in details">{{detail}}</li> <!-- like for (detail in details) {} -->
    </ul>
    `
})