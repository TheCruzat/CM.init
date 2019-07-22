<template>
	<div class="foot-frame">
    <div class="contact-frame" :class="{ 'open': showContact }">
      <div class="contain">
        <div class="contact-frame-drawer">

          <!--h3>Contact Us Today</h3>

          <h3>We Are Social</h3-->

          <ul class="labels">
            <li><a @click="cookMail('inquiries@cruzat.media', 'Hello CRUZAT.MEDIA')">
              <i class="fa fa-envelope"></i>
              <span>email c.m</span>
            </a></li>
            <li><a @click="cookPhone('7739884797')">
              <i class="fa fa-phone"></i>
              <span>call c.m</span>
            </a></li>
          </ul>

          <ul>
            <li v-for="lnk in soclnx"><a :href="lnk.link" :title="lnk.label" target="_blank">
              <i class="fa" :class="lnk.icon"></i>
              <span>@cruzatmedia</span>
            </a></li>
          </ul>

        </div>
        <!--button @click.prevent="showContact = !showContact" class="contact-frame-trigger">
          <span v-if="!showContact">[ contact us ]</span>
          <span v-if="showContact">X</span>
        </button-->
      </div>
    </div>
    <Cell v-for="cell in cells" :title="cell.title" :classes="cell.classes" :content="cell.content" :img="cell.img" :dumbnav="cell.dumbnav" />
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cell from '@/components/Cell.vue';
// import  from '@/components/   .vue'; // @ is an alias to /src

import brandW from '@/assets/cm-logo-v2-w.svg';

@Component({
  components: {
    Cell,
  },
})

export default class SiteFoot extends Vue {
  private brandW: string;
  private cells: Array<{title?: string; content?: any; classes?: string; bg?: any; img?: string; art?: string; links?: Array<{url: string; label: string;}>; icons?: Array<{icon: string; title: string; content: string;}>; dumbnav?: string}>;
  private showContact: boolean;
  private soclnx: Array<{label: string; link: string; icon: string;}>;
  constructor() {
    super();
    this.showContact = false;
    this.soclnx = [
      {
        label: 'CRUZAT.MEDIA on Twitter',
        link: 'https://twitter.com/cruzatmedia',
        icon: 'fa-twitter',
      },
      {
        label: 'CRUZAT.MEDIA on Instagram',
        link: 'https://instagram.com/cruzatmedia',
        icon: 'fa-instagram',
      },
      {
        label: 'CRUZAT.MEDIA on LinkedIn',
        link: 'https://linkedin.com/company/cruzatmedia',
        icon: 'fa-linkedin',
      },
      // {
      //   label: 'CRUZAT.MEDIA on SoundCloud',
      //   link: 'https://soundcloud.com/cruzatmedia',
      //   icon: 'fa-soundcloud',
      // },
    ];
    this.cells = [
      {
        content: '<a href="/"><img src="' + brandW + '" alt=""></a>',
        classes: 'brand',
        dumbnav: '/',
      },
      {
        classes: 'alert',
      },
      {
        content: '<span>all content &copy;2018-2019 cruzat media llc</span><span class="dvv"> : </span><span>all rights reserved</span>',
        classes: 'sig',
      },
    ];
  }

  public cookMail(e, s) {
    const subj = encodeURIComponent(s);
    const to = 'mailto:' + e + '?subject=' + subj.trim();
    window.location.href = to;
    // alert(to);
  }

  public cookPhone(p) {
    const to = 'tel:' + p;
    window.location.href = to;
    // alert(to);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "../estilos/global.scss";

  .foot-frame {
  	width: 100%;
  }

  .hide {
    display: none;
  }

</style>
