import Vue from "vue";


const thumbs = {
    template: "#preview-thumbs",
}
const btns = {
    template: "#preview-btns",
}
const tags = {
    template: "#preview-tags",
}
const display = {
    template: "#preview-display",
    components: { thumbs, btns },
}
const info = {
    template: "#preview-info",
    components: { tags },
}
new Vue({
    el: "#preview-component",
    template: "#preview-container",
    components: { display, info },
    data(){
        return {
            works: []
        }
    },
    methods: {
        requireImagesToArray(data){
            return data.map(item =>{
                const requiredImage = require(`../images/content/{item.photo}`).default;
                item.photo = requiredImage;
                return item 
            })
        }
    },
    created(){
        
        const data = require("../data/works.json");
        debugger
        this.works = requireImagesToArray(data);
    },
})