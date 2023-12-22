const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            details: [],
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },

        cleanCart(id) {
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
        }
    }
})