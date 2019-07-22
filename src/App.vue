<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div-->
    <router-view/>
  </div>
</template>

<style lang="scss">

@import url('//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('//fonts.googleapis.com/css?family=Open+Sans|Quantico&display=swap');

body {
  margin: 0;
  padding: 0;
  background: #000;
}
#app {
  font-family: 'Open Sans', san-serif; //'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
