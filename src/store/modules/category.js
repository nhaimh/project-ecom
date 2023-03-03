import axios from "axios";
import sweetalert from "sweetalert"
const CategoryModules = {
    state: {
        categories: []

    },
    getters: {

        categories: (state) => state.categories
    },
    actions: {
        async getCategory({ commit }) {
            try {
                const respone = await axios.get(`https://limitless-lake-55070.herokuapp.com/category/`)
                commit("GET_CTGR", respone.data)
            } catch (error) {
                console.log(error)
            }
        },
        //   data: JSON.stringify(newCategory),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        async editCategory({ commit }, category, id) {
            try {
                await axios.post(`https://limitless-lake-55070.herokuapp.com/category/update/${id}`, category)
                commit("EDIT_CATEGORY")
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

        GET_CTGR(state, categories) {
            state.categories = categories
        },
        EDIT_CATEGORY(state, category) {
            state.categories.push(category)
        }
    },
}
export default CategoryModules