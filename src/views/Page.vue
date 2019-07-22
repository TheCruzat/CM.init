<template>
	<div class="page">
		<SubHead :title="core.title" :type="core.loc" />
		<BigTitle :title="core.title" :tnav="core.titleNav" />
		<section class="content">
			<div class="contain" v-html="core.content"></div>

			<div v-if="core.iconLinkRow" class="icon-link-row contain">
				<a v-for="link in core.iconLinkRow" :href="link.link" target="_blank" :title="link.title">
					<i class="fa" :class="link.icon"></i>
				</a>
			</div>
			<div v-if="core.endNav" class="contain"><div class="centro">
				<div class="bumper"></div>
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
import BigTitle from '@/components/BigTitle.vue';
import ButtonRack from '@/components/ButtonRack.vue';


@Component({
  components: {
    SiteFoot,
    SubHead,
    BigTitle,
    ButtonRack,
  },
})

export default class Page extends Vue {
  @Prop() private core: object;
  @Prop() private flavor: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../estilos/global.scss";

</style>