<template>
	<ul class="icon-sub" v-if="icons">
		<li v-for="item in icons" :popcon="item.content">
			<router-link :to="item.route" :aria-label="item.title">
				<i :class="item.icon" class="fa"></i>
				<div class="frame"><span v-html="item.title "></span></div>
			</router-link>
		</li>
	</ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import  from '@/components/   .vue'; // @ is an alias to /src

import cc from '@/content/core.js';

@Component
export default class ServicesRack extends Vue {
  private icons?: object;
  constructor() {
    super();

    this.icons = [
      {
        title: 'Front End Development',
        icon: 'fa-cubes',
        route: '/services/front-end',
      },
      {
        title: 'WordPress Customization',
        icon: 'fa-scissors',
        route: '/services/wordpress',
      },
      {
        title: 'UX & Strategy',
        icon: 'fa-compass',
        route: '/services/ux-strategy',
      },
      {
        title: 'CSS & SASS',
        icon: 'fa-paint-brush',
        route: '/services/css',
      },
      // {
      //   title: 'Audio Recording',
      //   icon: 'fa-microphone',
      //   route: '/services/audio-recording',
      // },
      {
        title: 'Team Support',
        icon: 'fa-coffee',
        route: '/services/team-support',
      },
      // {
      //   title: 'Sound Design',
      //   icon: 'fa-volume-up',
      //   route: '/services/sound-design',
      // },
    ];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "@/estilos/global.scss";

</style>