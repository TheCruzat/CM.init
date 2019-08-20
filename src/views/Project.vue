<template>
	<div class="project">
		<SubHead :title="core.title" :type="core.loc" hasBigTitle="true" :sound="core.audio" />
	    <div v-if="set" class="full-title-substrip" v-bind:style="{ 'backgroundColor': core.stripColor }" >
	      <SubNavArrows v-if="set" title="see all projects" :subnav="set" :me="core.title" troute="/projects" />
	    </div>

		<section class="content">
			<img :src="core.img" class="mobile-hero" />
			<div class="contain" v-html="core.content"></div>
			<div v-if="core.lastCalls" v-for="(call, index) in core.lastCalls" class="contain last-calls">
				<div v-if="index>0" class="bumper full"></div>
				<div class="button-rack bump-2op">
					<a :href="call.url" class="button grande" target="_blank" :aria-label="call.label" v-html="call.label"></a>
				</div>
				<img class="wideshot edge pad-bv white-bg bump-top" :src="call.img" :alt="core.title">
			</div>
			<!-- div class="centro bump-2op">
				<ButtonRack :buttons="core.buttons" :classes="'finale'" :screen="true"  />
			</div -->
			<div class="contain"><div class="project-meta flexbox between bump-2op">
	      		<SubNavArrows v-if="set" :title="flavor" :subnav="set" :me="core.title" troute="/projects" class="footer-pagination" />
				<ButtonRack v-if="core.endNav" :buttons="core.endNav" class="naked" />
			</div></div>
		</section>
		<SiteFoot />
  	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SiteFoot from '@/components/SiteFoot.vue'; // @ is an alias to /src
import SubHead from '@/components/SubHead.vue'; // @ is an alias to /src
import ButtonRack from '@/components/ButtonRack.vue';
import SubNavArrows from '@/components/SubNavArrows.vue';



@Component({
  components: {
  	SubHead,
    SiteFoot,
    ButtonRack,
    SubNavArrows,
  },
})

export default class Project extends Vue {
	@Prop() private core: object;
	@Prop() private set?: object;
	@Prop() private flavor?: string;
	constructor() {
		super();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../estilos/global.scss";

</style>