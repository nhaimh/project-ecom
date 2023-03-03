import axios from "axios";
import swal from "sweetalert";
const ProductModules = {
    state: {
        products: []

    },
    getters: {

        products: (state) => state.products
    },
    actions: {
        async getProduct({ commit }) {
            try {
                const respone = await axios.get(`https://limitless-lake-55070.herokuapp.com/product/`)
                commit("GET_PRD", respone.data)
            } catch (error) {
                console.log(error)
            }
        },
        async addProduct({ commit }, newProduct) {
            try {
                await axios.post(`https://limitless-lake-55070.herokuapp.com/product/add/`, newProduct)
                commit("ADD_PRODUCT")
                swal({
                    text: "Product added",
                    icon: "success",
                });
            } catch (err) {
                console.log(err)
            }
        }


    },
    mutations: {

        GET_PRD(state, products) {
            state.products = products
        },
        ADD_PRODUCT(state, newProduct) {
            state.products.push(newProduct)
        }
    },
}
export default ProductModules