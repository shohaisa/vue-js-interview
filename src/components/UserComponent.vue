<script>
import {mapGetters} from "vuex";

export default {
    name: "UserComponent",
    data () {
        return {
            users: [],
        }
    },
    computed: {
        ...mapGetters(["operator", "age", "address"]),
      getUsers() {
          if (this.address !== '') {
              return this.users.filter(
                  (user) => user.address.city === this.address
              )
          }else if (this.age !== '') {
              switch (this.operator) {
                  case '=':
                      return this.users.filter(
                          (user) => user.age == this.age
                      )
                  case '<':
                      return this.users.filter(
                          (user) => user.age > this.age
                      )
                  case '>':
                      return this.users.filter(
                          (user) => user.age < this.age
                      )
              }
          }

          return this.users
      }
    },
    mounted() {
        fetch('https://dummyjson.com/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
            this.users = data.users
        })
    }
}
</script>

<template>
  <div>
      <div style="display: flex">
      </div>
      <v-list class="user-list" three-line>
          <template v-for="item in getUsers">
              <v-list-item
                      :key="item.id"
              >
                  <v-list-item-avatar>
                      <v-img :src="item.image"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                      <v-list-item-title>{{item.firstName}} {{item.lastName}}</v-list-item-title>
                      <v-list-item-subtitle >{{item.address.city}}</v-list-item-subtitle>
                      <v-list-item-subtitle >{{item.age}}</v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
              <v-divider :key="item.id + '_div'" :inset="true"
              ></v-divider>
          </template>
      </v-list>
  </div>
</template>

<style scoped>
.user-list {
    overflow: scroll;
    max-height: 700px;
}

</style>