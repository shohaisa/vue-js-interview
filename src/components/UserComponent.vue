<script>
import {mapGetters} from "vuex";

export default {
    name: "UserComponent",
    data () {
        return {
            users: [],
            dialog: false,
            userInfo: {
              image: '',
              address: {
                address: '',
                city: ''
              }
            }
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
  methods: {
      getUserInfo (id) {
        this.userInfo = this.users.find(el => el.id == id)
        this.dialog = true
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
        <v-dialog
          v-model="dialog"
          width="400"
        >
          <v-card>
            <div class="d-flex align-center" >
              <v-avatar size="150">
                <v-img :src="userInfo.image"></v-img>
              </v-avatar>
              <v-card-title>{{userInfo.firstName}} {{userInfo.lastName}}</v-card-title>
            </div>
            <v-card-text>{{userInfo.address.city}}, {{userInfo.address.address}}</v-card-text>
            <v-btn  block @click="dialog = false">Закрыть</v-btn>
          </v-card>
        </v-dialog>
      <v-list class="userlist-items" three-line>
          <template v-for="item in getUsers">

              <v-list-item
                  @click="getUserInfo(item.id)"
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