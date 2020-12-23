<template>
    <v-navigation-drawer class="mt-3" app>
      <v-list>
      <!-- <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item> -->

      <v-list-group
        :value="true"
        prepend-icon="mdi-menu"
      >
        <template v-slot:activator>
          <v-list-item-title>ข้อมูลหลัก</v-list-item-title>
        </template>
          <v-list-item
            @click="y_a = !y_a"
            :color="y_a"
            class="ml-3 mr-3"
            v-for="([title, icon], i) in user"
            :key="i"
            link
          >
          
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>

          </v-list-item>
      </v-list-group>
       <v-list-item link>
         <v-list-item-icon>
              <v-icon>mdi-sitemap</v-icon>
            </v-list-item-icon>
            <v-list-item-title >จัดการแผงควบคุม</v-list-item-title>
       </v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>
<script>
  export default {
    data: () => ({
        user: [
          ['ผู้ใช้งาน','mdi-account-box'],
          ['โครงการ','mdi-briefcase'],
          ['กำหนดสิทธิ์แบบกลุ่ม','mdi-checkbox-marked-outline']
        ],
    }),
  }
</script>