<template>
	<header :class="{ 'has-bt' : hasBigTitle }">
		<div class="top">
			<div class="contain">
				<router-link to="/" class="brand">
					<img :src="brandB" class="des" alt="cruzat.media">
					<img :src="iconB" class="mob" alt="cruzat.media">
				</router-link>
				<div class="type-title" v-bind:class="{ 'shownav': showNav }">
					<h1><span v-html="title"></span></h1>
					<div class="nav-loc">
						<span class="loc" @click="showNav = !showNav">c.m:\{{type}}></span>
						<span class="nav">
							<router-link to="/services">services</router-link><span class="dv"> : </span><router-link to="/projects">projects</router-link><span class="dv"> : </span><router-link to="/about">about</router-link><!--router-link to="/contact">contact</router-link><span class="dv"> : </span-->
						</span>
					</div><button v-if="sound" @click.prevent="playSound(sound)">play page</button>
				</div>
			</div>
		</div>
		<div v-if="flavor == 'services'" class="sub"><div class="contain">
			<ServicesRack />
		</div></div>
	</header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import  from '@/components/   .vue'; // @ is an alias to /src

import brandB from '@/assets/cm-logo-v2-b.svg';
import iconB from '@/assets/cm-01.svg';

import ServicesRack from '@/components/ServicesRack.vue';

@Component({
  components: {
    ServicesRack,
  },
})
export default class SubHead extends Vue {
  @Prop() private type: string;
  @Prop() private flavor?: string;
  @Prop() private title: string;
  @Prop() private hasBigTitle?: boolean;
  @Prop() private sound?: string;
  private brandB: string;
  private iconB: string;
  private showNav: boolean;

  constructor() {
    super();
    this.brandB = brandB;
    this.iconB = iconB;
    this.showNav = true;
  }

  public playSound(sound) {
  	if (sound) {
    	const audio = new Audio(sound);
    	audio.play();
  	}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "@/estilos/global.scss";

  .type-title {
  	text-align: left;
  }

</style>