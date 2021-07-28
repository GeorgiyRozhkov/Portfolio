<template>
    <nav class="navigation-component">
        <div class="container">
            <ul class="list">
                <li 
                    :class="['item', {active: link.active}]"
                    v-for="link in links" 
                    :key="link.id">
                    <a :href="`/${link.alias}`" class="link">{{link.title}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
const links = [
    {id: 0, title: "Обо мне", alias: "admin#/", active: true},
    {id: 1, title: "Работы", alias: "admin#/works", active: false},
    {id: 2, title: "Отзывы", alias: "admin#/reviews", active: false},
];
export default {
    data(){
        return {
            links
        }
    }
}
</script>

<style lang="postcss" scoped src="./navigation.pcss">

</style>