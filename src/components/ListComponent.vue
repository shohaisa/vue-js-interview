<script>
import UserComponent from "@/components/UserComponent.vue";

export default {
    name: "ListComponent",
    components: {UserComponent},
    data () {
        return {
          header: 'List'
        }
    }
}
</script>

<template>
    <v-card
            max-width="450"
            class="mx-auto">
        <v-subheader
                v-if="header"
                :key="header"
                v-text="header"
        ></v-subheader>
        <UserComponent/>
    </v-card>
</template>

<style scoped>

</style>