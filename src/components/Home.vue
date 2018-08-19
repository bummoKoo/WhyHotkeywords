<template>
  <html>
  <head>
    <title>Vuetify Parallax Starter</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">
  </head>
  <body>
  <div id="app">
    <v-app light>
      <v-toolbar class="white">
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <h1>Top Menu</h1>
      </v-toolbar>
      <section>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img src="../assets/naver-icon.png">
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img src="../assets/daum-icon.png">
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <img src="../assets/nate-icon.jpg">
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
      </section>
    </v-app>
  </div>
  </body>
  </html>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
