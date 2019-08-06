<template>
  <div :class="classes"><div class="contain">
    <button aria-label="previous Project" @click.prevent="flipProj('--')"><i class="fa fa-angle-left"></i></button>
    <p><router-link :to="troute" :aria-label="title" v-html="title"></router-link></p>
    <button aria-label="next Project" @click.prevent="flipProj('++')"><i class="fa fa-angle-right"></i></button>
  </div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import  from '@/components/   .vue'; // @ is an alias to /src

@Component
export default class SubNavArrows extends Vue {
  @Prop() private title!: string;
  @Prop() private classes?: string;
  @Prop() private subnav?: object;
  @Prop() private me?: string;
  @Prop() private troute?: string;

  private length: number;
  private pos: number;

  constructor(subnav) {
    super();
    const sn = this.subnav;

    this.length = this.countEm(this.subnav);    // item count
    this.pos = this.findMe(this.subnav, this.me); // position in object

    // console.log(this.me);
  }

  public flipProj(q) {
    let l = this.length;
    let n = this.subnav;
    let k = Object.keys(this.subnav);

    if(q=='--') {
      this.pos --;
      if(this.pos < 0) {
        this.pos = (this.length - 1);
      }
    } else {
      this.pos ++;
      if(this.pos == this.length) {
        this.pos = 0;
      }
    }

    // console.log(this.pos);

    this.$router.push({ path: this.subnav[k[this.pos]].route});
  }

  public findMe(q, i) {
    let curr = 0;
    for (var r in q) {
      if(q[r].title == i) {
        return curr;
      } else {
        curr ++;
      }
    }
  }

  public countEm(q) {
    let curr = 0;
    for (var i in q) {
      curr ++;
    }
    return curr;
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "@/estilos/global.scss";

  .contain {
    width: 100%;
    display: flex;
  }

</style>