<template>
      <div>
            <intro-loading v-if="loading"/>
            <div class="content" v-else>
                  
            </div>
      </div>
</template>

<script>
import IntroLoading from '~/components/intro-loading/intro-loading';

export default {
      components: { IntroLoading },
      data() {
            return {
                  loading: true,
            };
      },
      async mounted() {
            setTimeout(() => {
                  this.loading = false;
            }, 2000);
      }
};
</script>

<style lang="scss">
      @import "./main";
</style>