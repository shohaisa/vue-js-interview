<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "FilterAge",
    data() {
        return {
            operators: ['=', '<', '>',],
        }
    },
    computed: {
      ...mapGetters(['age', 'operator'])
    },
    methods: {
        ...mapActions(['setAge', 'setOperator']),
    },
}
</script>

<template>
    <div style="display: flex">
        <v-select
            @change="setOperator"
            :items="operators"
            clearable
            label="Возраст"
        ></v-select>
        <v-text-field
            :value="age"
            @change="setAge"
            type="number"
        ></v-text-field>
    </div>
</template>

<style scoped>

</style>