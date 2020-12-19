<template>
      <div class="products-slider full-width">
            <carousel :per-page="1" v-bind:autoplay="false" v-bind:loop="true">
                  <slide v-for="(item, index) in slides" :key="`slider-item-${index}`">
                        <div class="slider-item" :style="{'background-image': 'url(' + item.src + ')'}"></div>
                  </slide>
            </carousel>
      </div>
</template>

<script>
      export default {
            name: "slider",
            props: {
                  slides:{
                        type: Array,
                        default: []
                  }
            }
      }
</script>

<style lang="scss">
      @import "slider";
</style>
