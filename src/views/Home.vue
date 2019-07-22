<template>
  <div class="home">
    <MainRoll />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainRoll from '@/components/MainRoll.vue'; // @ is an alias to /src

@Component({
  components: {
    MainRoll,
  },
})
export default class Home extends Vue {}
</script>
