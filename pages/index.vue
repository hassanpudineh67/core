<template>
      <div class="container">
            <intro-loading v-if="loading"/>
            <div v-else>
                  <div class="row">
                        <div class="col-12">
                              <Header/>
                        </div>
                  </div>
            </div>
      </div>      
</template>

<script>
import Header from "~/components/custom/header/header";
import IntroLoading from '~/components/intro-loading/intro-loading';

export default {
      components: { IntroLoading, Header },
      data() {
            return {
                  loading: true,
            };
      },
      async mounted() {
            setTimeout(() => {
                  this.loading = false;
            }, 1000);
      },
      methods: {},
};
</script>

<style lang="scss">
      @import "./main";
</style>