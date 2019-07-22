<template>
	<div class="button-rack" :class="classes">
    <div v-if="screen" class="screen"></div>
    <a class="button" :class="bnclass" v-if="linkLabel && linkURL" :href="linkURL" target="_blank" v-html="linkLabel"></a>
    <a class="button" :class="bnclass" v-if="buttons && buttons.links" v-for="link in buttons.links" :href="link.url" target="_blank" v-html="link.label"></a>
    <router-link class="button" :class="bnclass" v-if="buttons && buttons.routes" v-for="route in buttons.routes" :to="route.url" v-html="route.label"></router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import  from '@/components/   .vue'; // @ is an alias to /src

@Component
export default class ButtonRack extends Vue {
  @Prop() private buttons?: object;
  @Prop() private classes?: string;
  @Prop() private bnclass?: string;
  @Prop() private screen?: boolean;
  @Prop() private linkLabel?: string;
  @Prop() private linkURL?: string;

  constructor() {
    super();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "@/estilos/global.scss";

</style>