<script>
import FilterAge from "@/components/FilterAge.vue";
import FilterAddress from "@/components/FilterAddress.vue";

export default {
    name: "Filters",
    components: {FilterAge,FilterAddress},
}
</script>

<template>
    <v-col
    cols="12"
    md="4"
    >
        <FilterAddress/>
        <FilterAge/>
    </v-col>
</template>

<style scoped>

</style>