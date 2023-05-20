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
          let filterUsers = this.users
          if (this.address !== null) {
                  filterUsers = this.users.filter(
                  (user) => user.address.city === this.address
              )
          }
          if (this.age !== '') {
              switch (this.operator) {
                  case '=':
                      filterUsers = filterUsers.filter((user) => user.age == this.age)
                      break
                  case '<':
                      filterUsers =  filterUsers.filter((user) => user.age > this.age)
                      break
                  case '>':
                      filterUsers = filterUsers.filter((user) => user.age < this.age)
              }
          }

          return filterUsers
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
  <div class="userlist">
      <div style="display: flex">
      </div>
      <v-list class="userlist-items" three-line>
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

.userlist-items {
    overflow: scroll;
    max-height: 700px;
}

</style>