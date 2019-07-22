<template>
	<div class="section" :class="flavor">
		<SubHead :title="core.title" :type="core.loc" :flavor="flavor" />
		<BigTitle :title="flavor" :tnav="core.titleNav" />
		<section class="content">

			<div class="contain" v-html="core.content"></div>

			<div v-if="set" class="contain set">
				<router-link v-for="link in set" :to="link.route">
					<img :src="link.img" />
					<div class="frame"><div class="ribbon">
						<h2 v-html="link.title"></h2>
						<div v-html="link.brief"></div>
					</div></div>
					<div class="screen"></div>
				</router-link>
			</div>

			<div v-if="flavor == 'services'" class="contain">
				<ServicesRack />
			</div>

			<div class="contain"><div class="bumper full center"></div></div>

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
import ServicesRack from '@/components/ServicesRack.vue'; // @ is an alias to /src
import ButtonRack from '@/components/ButtonRack.vue';


@Component({
  components: {
    SiteFoot,
    SubHead,
    ServicesRack,
    BigTitle,
    ButtonRack,
  },
})

export default class Section extends Vue {
	@Prop() private core: object;
	@Prop() private set?: object;
	@Prop() private flavor?: string;	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import "../estilos/global.scss";

</style>