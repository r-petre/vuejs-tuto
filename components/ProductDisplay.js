app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
                <div class="product-container">
                    <div class="product-image">
                        <img v-bind:src="[inStock ? image : outOfStockImage]">
                        <!-- same as above : <img :src="image"> -->
                    </div>
                    <div class="product-info">
                        <h1>{{ title }}</h1>

                        <!-- <div class="color-circle" :class="{active: isActive}"></div> => if active is true combine classes color-circle and active -->
                        <!-- it's like doing <div class="color-circle active"></div> -->
                        <!-- can use ternary operators <div :class="[isActive ? activeClass : '']"></div> -->

                        <!-- <p v-show="inStock">In Stock</p>  -->
                        <!-- contrairement à v-if qui va créer dans le DOM l'élément seulement si la condition est vraie, 
                         v-show affiche ou cache juste l'élément (boolean as param)-->

                        <!-- <p v-if="inventory > 10">In Stock</p>
                        <p v-if="inventory <= 10 && inventory > 0">Almost out of stock !!</p>
                        <p v-else>Out of Stock</p> -->

                        <p v-if="inStock">In Stock</p>
                        <p v-else>Out of Stock !! T.T</p>
                        <p v-show="onSale" class="sales">On Sale !!!</p>

                        <p>Shipping: {{ shipping }}</p>

                        <product-details :details="details"></product-details>
                        
                        <!-- <div v-for="variant in variants" 
                        :key="variant.id" 
                        @mouseover='updateImage(variant.image)'
                        class="color-circle"
                        :style="{ backgroundColor: variant.color}"></div> -->
                        <!--<tbody>
                            <template v-for="variant in variants">
                                <tr></tr>
                                <!- <tr :key="variant.id"
                                @mouseover='updateImage(variant.image)'
                                class="color-circle"
                                :style="{ backgroundColor: variant.color }"></tr> ->
                                <tr>{{ variant.color}}</tr>
                            </template>
                        </tbody> -->
                        <table>
                            <tr >
                                <td v-for="(variant, index) in variants"
                                @mouseover='updateVariant(index)'
                                class="color-circle"
                                :style="{ backgroundColor: variant.color }"></td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <td><button class="button" 
                                    @click="addToCart"
                                    :class="{ disabledButton: !inStock }"
                                    :disabled="!inStock">Add to Cart</button></td> <!-- '@' replaces 'v-on:' -->
                                <td><button class="button" 
                                    @click="removeFromCart" >Remove from Cart</button></td> <!-- 'v-show="cart > 0"' doesn't work since "cart" var is not defined in this component -->
                            </tr>
                        </table>
                    </div>
                </div>
                <review-list v-if="reviews.length" :reviews="reviews"></review-list>
                <review-form @review-submitted="addReview"></review-form>
            </div>
            <!-- <p>{{ description }}</p> -->`,
            data() {
                return {
                    product: 'Socks',
                    brand: 'Nayki',
                    description: 'Best socks ever, for the coldest winters to the warmest summers',
                    // image: './assets/images/green_sockets.png', // --> can't have a computed variable and a "static" variable, else static one used
                    selectedVariant: 0,
                    outOfStockImage: './assets/images/out_of_stock.jpg',
                    inventory: 8,
                    onSale: false,
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    variants: [
                        {id: 2234, color: 'Green', image: './assets/images/green_sockets.png', quantity: 50},
                        {id: 2235, color: 'Blue', image: './assets/images/blue_sockets.png', quantity: 0}
                    ],
                    reviews: []
                    // inStock: true // --> can't have a computed variable and a data variable, else static one used
                }
            },
            methods: {
                addToCart() {
                    this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
                },
                removeFromCart() {
                    this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
                },
                updateImage(variantImagePath){
                    this.image = variantImagePath
                },
                updateVariant(index){
                    this.selectedVariant = index
                },
                addReview(review){
                    this.reviews.push(review)
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
                },
                shipping(){
                    return this.premium ? 'Free' : 2.99
                }
            }
})