const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Nayki',
            description: 'Best socks ever, for the coldest winters to the warmest summers',
            // image: './assets/images/green_sockets.png',
            selectedVariant: 0,
            outOfStockImage: './assets/images/out_of_stock.jpg',
            // inStock: true
            inventory: 8,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/green_sockets.png', quantity: 50},
                {id: 2235, color: 'blue', image: './assets/images/blue_sockets.png', quantity: 0}
            ],
            inStock: true
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart > 0 ? this.cart -= 1 : this.cart
        },
        updateImage(variantImagePath){
            this.image = variantImagePath
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity > 0    
        }
    }
})