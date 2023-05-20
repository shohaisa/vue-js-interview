<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "FilterAddress",
    data() {
        return {
            select: [],
        }
    },
    computed: {
      ...mapGetters(['address'])
    },
    methods: {
      ...mapActions(['setAddress'])
    },
    mounted() {
        fetch('https://dummyjson.com/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.users.map(elem => {
                    if (!this.select.includes(elem.address.city)) {
                        this.select.push(elem.address.city)
                    }
                })
            })
    }
}
</script>

<template>
    <div>
        <v-select
            @change="setAddress"
            :items="select"
            clearable
            label="Выберите город"
        ></v-select>
    </div>
</template>

<style scoped>

</style>