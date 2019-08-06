<template>
	<div :classes="classes" class="full-title">
    <router-link aria-label="Previous Section" class="tnav" v-if="tnav" :to="tnav[0]"><i class="fa fa-chevron-left"></i></router-link>
    <div class="contain">
      <h1 v-html="title"></h1>
    </div>
    <router-link aria-label="Next Section" class="tnav" v-if="tnav" :to="tnav[1]"><i class="fa fa-chevron-right"></i></router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import  from '@/components/   .vue'; // @ is an alias to /src

@Component
export default class BigTitle extends Vue {
  @Prop() private title!: string;
  @Prop() private classes?: string;
  @Prop() private substrip?: string;
  @Prop() private flavor?: string;
  @Prop() private subnav?: object;
  @Prop() private tnav?: [];

  constructor() {
    super();
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "@/estilos/global.scss";

</style>