<template>
  <div class="frame">

    <div class="top cell">
      <parallax :speed-factor="0.25" class="top cell" :direction="down">
        <img :src="brandB" alt="CRUZAT.MEDIA">
      </parallax>
    </div>

    <Cell v-for="cell in cc.main.cells" :title="cell.title" :classes="cell.classes" :content="cell.content" :img="cell.img" :art="cell.art" :links="cell.links" :icons="cell.icons" :navlinks="cell.navlinks" />

    <SiteFoot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Parallax from 'vue-parallaxy';
import Cell from '@/components/Cell.vue';
import SiteFoot from '@/components/SiteFoot.vue';

import brandB from '@/assets/cm-logo-v2-y.svg';
import cc from '@/content/core.js';

@Component({
  components: {
    Cell,
    SiteFoot,
    Parallax,
  },
})

export default class MainRoll extends Vue {
  @Prop() private cc: object;
  private brandB: string;
  constructor() {
    super();
    this.cc = cc;
    this.brandB = brandB;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import "../estilos/global.scss";

</style>
