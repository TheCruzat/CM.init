<template>
    <div class="cell" :class="classes">
      <router-link v-if="dumbnav" :to="dumbnav" class="dumbnav"></router-link>
      <div v-if="bg" class="cell-bg" v-bind:style="{ backgroundImage: 'url(' + bg + ')', backgroundSize: 'cover' }"></div>
      <div class="cell-frame">

        <h3 v-if="title && img == null && art == null" v-html="title" class="biggie"></h3>

        <div v-if="art" class="art-shell">
          <img class="shade art" :src="art" alt="" />
          <div v-if="links" class="button-rack">
            <a v-for="link in links" :href="link.url" v-html="link.label" class="button"></a>
          </div>
          <div v-if="navlinks" class="button-rack">
            <router-link v-for="link in navlinks" :to="link.url" v-html="link.label" class="button"></router-link>
          </div>
          <div v-if="content" v-html="content"></div>
        </div>

        <div v-if="img == null && art == null" class="shell">
          <div v-if="content" v-html="content"></div>
          <ul class="icons icon-sub" v-if="icons">
            <li v-for="item in icons" :popcon="item.content">
              <router-link :to="item.route"><i :class="item.icon" class="fa"></i><span v-html="item.title "></span></router-link>
            </li>
          </ul>
          <div v-if="navlinks" class="button-rack">
            <router-link v-for="link in navlinks" :to="link.url" v-html="link.label" class="button"></router-link>
          </div>
        </div>

        <div v-if="img" class="banner" v-bind:style="{ background: 'url(' + img + ') 50% 50% no-repeat', backgroundSize: 'cover' }"></div>

        <div v-if="img && art == null" class="ribbon">
          <h3 v-if="title" v-html="title"></h3>
          <div v-if="content && img" v-html="content"></div>
          <div v-if="links" class="button-rack">
            <a v-for="link in links" :href="link.url" v-html="link.label" class="button"></a>
          </div>
          <div v-if="navlinks" class="button-rack">
            <router-link v-for="link in navlinks" :to="link.url" v-html="link.label" class="button"></router-link>
          </div>
        </div>

      </div>
      <div v-if="img && art == null" class="screen"></div>
      <router-link :to="navlinks[0].url" v-if="img && art == null" class="bigscreen"></router-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Cell extends Vue {
  @Prop() private title?: string;
  @Prop() private content?: any;
  @Prop() private classes?: string;
  @Prop() private img?: string;
  @Prop() private bg?: any;
  @Prop() private art?: string;
  @Prop() private links?: [];
  @Prop() private icons?: [];
  @Prop() private navlinks?: [];
  @Prop() private dumbnav?: string;

  private popModal(q) {
    alert(q);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
