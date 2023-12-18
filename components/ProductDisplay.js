app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :src="image">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ sale }}</p>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div 
              v-for="variant, index in variants" 
              :key="variant.id" 
              @mouseover="updateVariant(index)"
              class="color-circle"
              :class="{ active: activeClass }"
              :style="{ backgroundColor: variant.color }"
              >
            </div>
            <button 
              class="button" 
              :class="{ disabledButton: !inStock }"
              :disabled="!inStock"
              @click="addToCart"
              >
              Add to Cart
            </button>
            <a :href="url">Made by Vue Mastery</a>
        </div>
    </div>
</div>`,
data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        url: 'https://www.vuemastery.com/',
        activeClass: false,
        inventory: 8,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            { 
                id: 2234, 
                color: 'green', 
                image: './assets/images/socks_green.jpg',
                quantity: 50,
            },
            { 
                id: 2235, 
                color: 'blue',
                image: './assets/images/socks_blue.jpg',
                quantity: 0,
            },
        ],
        styles: {
            color: 'red',
            fontSize: '14px'
        },
        onSale: false,
    }
},

methods: {
    addToCart() {
        this.cart += 1;
    },
    updateVariant(index) {
        this.selectedVariant = index
    }
},

computed: {
    title() {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    sale() {
        if (this.onSale) {
            return this.brand + ' ' + this.product + ' is on sale.'
        }
        return ''
    },
    shipping() {
        if(this.premium) {
            return 'Free'
        }
        return 2.99
    }
}
})