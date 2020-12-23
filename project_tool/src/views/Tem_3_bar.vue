<template>
            <v-app-bar class="overflow-hidden mb-2" src="https://media.gettyimages.com/photos/aerial-view-of-crowded-traffic-at-night-picture-id1090837752?s=2048x2048" app>
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Lemon" />
                <template v-slot:img="{ props }">
                    <v-img
                    v-bind="props"
                    gradient="to top right,rgba(221, 224, 243, 0.7), rgba(25,32,72,.7)"
                    style="filter: blur(1px); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);"
                    ></v-img>
                </template>
                <v-avatar color="white" size="55" ><v-img src="../icon/lightbulb1.svg"/>
                </v-avatar>
                    <h1 style="
                        margin-top: 20px;
                        font-family: Lemon;   
                        color: white;
                        -webkit-text-fill-color:#FFD517;
                        font-style: normal;
                        font-weight: normal;
                        -webkit-text-stroke: 1.5px white;
                        font-size:30px;">SmartLight</h1>
            </v-app-bar>
</template>