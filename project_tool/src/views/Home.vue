<template>
  <div class="home">
    <v-app>
      <v-card class="">
        <v-container>
          <v-row>
          <v-col>
            <v-btn small color="primary"> <router-link class="white--text" to="/template">template 1</router-link> </v-btn>
            <v-btn small color="primary"> <router-link class="white--text" to="/template2">template 2</router-link> </v-btn>
            <v-btn small color="primary"> <router-link class="white--text" to="/template3">template 3</router-link> </v-btn>
          </v-col>  
          </v-row>
        </v-container>
      </v-card>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
