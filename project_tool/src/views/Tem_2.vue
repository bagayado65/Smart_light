<template>
           
    <div id="app">
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lemon" />
        <v-app>
        <span class="c">
            <v-dialog v-model="dialog" hide-overlay persistent  max-width="1200px" min-width="360px">
                <v-card class="mx-auto my-auto c-log" >
                    <v-container fluid>
                        <v-row class="mt-9"  dense>
                        <v-card-title class="mx-auto">
                            <h1 style="
                         font-family: Lemon;   
                        color: white;
                        -webkit-text-fill-color:white;
                        -webkit-text-stroke-width: 4px;
                        -webkit-text-stroke-color: black; 
                        font-size:60px;">Register</h1>
                        </v-card-title>
                         
                        </v-row>
                        <v-row  dense>
                                <v-card-text >
                             <v-form style="margin-left: 350px; margin-right: 350px" >
                                <v-text-field
                                    v-model="input_u"
                                    style="border-radius: 3px"
                                    class="white"
                                    label="Username" 
                                    prepend-icon="mdi-account-circle"
                                    
                                />
                                <v-text-field
                                    v-model="input_e"
                                    style="border-radius: 3px"
                                    class="mt-11 white"
                                    label="Email"
                                    prepend-icon="mdi-email"
                                    @blur="check_email"
                                        
                                /><v-alert    v-if="check_e"
                                            style="margin:0px; padding:0px"
                                            type="error"
                                            >
                                           <strong>email</strong> do not -> @mail
                                            </v-alert>
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
                                <v-text-field
                                    v-model="input_re_p"
                                    style="border-radius: 3px"
                                    class="mt-11 white"
                                    :type="showPassword ? 'text' : 'password'" 
                                    label="Re-Password"
                                    prepend-icon="mdi-lock"
                                    @blur="check_repassword()"
                                    
                                />
                                <v-alert    v-if="check_ps"
                                            style="margin:0px; padding:0px"
                                            type="error"
                                            >
                                           <strong>Passwords</strong> do not match
                                            </v-alert>
                                <v-card-actions>
                                <v-btn 
                                @click="check_repassword()"
                                width="auto"
                                class="mx-auto mt-4"               
                                color="success"
                                x-large><h3 style="font-family: Lemon; font-size:20px">
                                    Sing Up</h3>
                                </v-btn>
                            </v-card-actions>
                             </v-form>
                        </v-card-text>
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
    clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 10% 100% );
}
.c-log{
position: relative;
width: 1229px;
height: 665px;
background: linear-gradient(120.3deg, #FFFFFF 26%, #1C53A0 26%);

}
</style>
<script>
  export default {
    data: () => ({
      dialog: true,
      showPassword: false,
      input_u: '',
      input_p: '',
      input_re_p: '',
      input_e: '',
      check_e: false,
      check_ps: false,
    }),
    methods:{
        check_repassword: function () {
            if(this.input_p == this.input_re_p){
                this.check_ps = false
            }else{
                this.check_ps = true
            }
        },
        check_email: function () {
            for (let i = 0; i < this.input_e.length; i++) {
                if( this.input_e[i] == '@'){
                    this.check_e = false
                }else{
                    this.check_e = true
                }
            }
        }
    }
  }
</script>