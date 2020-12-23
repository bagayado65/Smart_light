<template>
           
    <div id="app">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lemon" />
        <v-app>
        <span class="c">
            <v-dialog v-model="dialog" hide-overlay persistent  max-width="1200px" min-width="360px">
                <v-card class="mx-auto my-auto c-log" >
                    <v-container fluid>
                        <v-row class="mt-10 mb-10"  dense>
                            <v-col class="ml-10">
                            <v-img v-if="input_p == '' && input_u == '' " class="mx-auto"><img width="300px" height="300px" src="../icon/lightbulb.svg"></v-img>
                            <v-img v-else class="mx-auto"><img width="300px" height="300px" src="../icon/lightbulb1.svg"></v-img>
                         <v-text v-if="input_p == '' && input_u == '' " class="mx-Left"><h1 style="
                         font-family: Lemon;   
                        color: white;
                        -webkit-text-fill-color:white;
                        -webkit-text-stroke-width: 4px;
                        -webkit-text-stroke-color: black; 
                        font-size:60px;" >SmartLight </h1></v-text>
                          <v-text v-else class="mx-Left"><h1 style="
                         font-family: Lemon;   
                        color: #FFD517;
                        -webkit-text-fill-color:#FFD517;
                        -webkit-text-stroke-width: 4px;
                        -webkit-text-stroke-color: black; 
                        font-size:60px;" >SmartLight </h1></v-text>
                            </v-col>
                            <v-col  class="mx-left my-auto">
                                  <div style="margin-top: 200px">
                                      <v-card-text>
                                <v-form class="ml-9 mr-9" >
                                <v-text-field
                                    v-model="input_u"
                                    style="border-radius: 3px"
                                    class="white"
                                    label="Username" 
                                    prepend-icon="mdi-account-circle"
                                />
                                <v-text-field
                                    v-model="input_p"
                                    style="border-radius: 3px"
                                    class="mt-11 white"
                                    :type="showPassword ? 'text' : 'password'" 
                                    label="Password"
                                    prepend-icon="mdi-lock"
                                    :append-icon="showPassword ? 'mdi-eye mr-3' : 'mdi-eye-off mr-3'"
                                    @click:append="showPassword = !showPassword"
                                />
                                 <v-divider></v-divider>
                                <v-card-actions>
                                <v-btn
                                width="auto"
                                class="mx-auto mt-10"               
                                color="success"
                                x-large><h1 style="font-family: Lemon; font-size:20px">Login</h1></v-btn>
                                </v-card-actions>   
                                </v-form>
                            </v-card-text>
                                  </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-dialog>
        </span>
        </v-app>
    </div>
</template>
<style scoped>
.c{
    width: 100%;
    height: 100%;
    background: #1C53A0;
    clip-path: polygon(70% 0%, 100% 0%, 100% 100%, 30% 100% );
}
.c-log{
position: relative;
width: 1229px;
height: 665px;
background: linear-gradient(127deg, #FFFFFF 50%, #1C53A0 50%);

}
</style>
<script>
  export default {
    data: () => ({
      dialog: true,
      showPassword: false,
      input_u: '',
      input_p: ''
    }),
  }
</script>