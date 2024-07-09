const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            description: 'Best socks ever, for the coldest winters to the warmest summers',
            image: './assets/images/green_sockets.png',
            // inStock: true
            inventory: 8,
            onSale: false
        }
    }
})