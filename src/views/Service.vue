<template>
	<div class="page services">
		<SubHead :title="core.title" :icon="core.icon" :type="core.loc" :flavor="flavor" />
		<BigTitle :title="core.title" :tnav="core.titleNav" />
		<section class="content">
			<div class="contain" v-html="core.content"></div>

			<div class="contain"><div class="centro"><div class="button-rack"><BigCTA email="inquiries@cruzat.media" label="Contact Us Today" :subject="core.title" subjectRoot="C.M on " /></div></div></div>

			<ButtonRack :buttons="core.buttons" />

			<ButtonRack v-if="core.endNav" :buttons="core.endNav" class="naked" />
		</section>
		<SiteFoot />
  	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SiteFoot from '@/components/SiteFoot.vue'; // @ is an alias to /src
import SubHead from '@/components/SubHead.vue'; // @ is an alias to /src
import BigTitle from '@/components/BigTitle.vue';
import BigCTA from '@/components/BigCTA.vue';
import ButtonRack from '@/components/ButtonRack.vue'; //

@Component({
  components: {
    SiteFoot,
    SubHead,
    ButtonRack,
    BigTitle,
    BigCTA,
  },
})

export default class Service extends Vue {
	@Prop() private core: object;
	@Prop() private flavor?: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../estilos/global.scss";

</style>