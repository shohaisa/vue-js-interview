<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>
      <Filters/>
      <v-col
          cols="12"
          md="4"
      >
      <ListComponent/>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import ListComponent from "@/components/ListComponent.vue";
  import Filters from "@/components/Filters.vue";

  export default {
    name: 'ContentBlock',
      components: {Filters, ListComponent},
  }
</script>
