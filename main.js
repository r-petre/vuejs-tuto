const app = Vue.createApp({
    data(){
        return {
            cart: [],
            premium: false // the account is premium, not the product, hence the declaration of this var is here and not on ProductDisplay.js
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeFromCart(id){
            this.cart.pop(id)
        }
    }
})