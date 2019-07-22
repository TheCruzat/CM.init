<template>
  <a @click="cookLink(email, subject, subjectRoot)" v-html="label" class="button grande"></a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import  from '@/components/   .vue'; // @ is an alias to /src

@Component
export default class BigCTA extends Vue {
  @Prop() private label?: string;
  @Prop() private subject?: string;
  @Prop() private subjectRoot?: string;
  @Prop() private email?: string;
  @Prop() private type?: string;

  public cookLink(e, s, sr) {
    const subj = encodeURIComponent(sr + s);
    const to = 'mailto:' + e + '?subject=' + subj.trim();
    // alert(to);
    window.location.href = to;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "@/estilos/global.scss";

</style>