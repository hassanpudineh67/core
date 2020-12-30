<template>
      <div class="header flex align-center justify-around">
            <nav class="flex align-center justify-center p-5">
                  <img class="logo" src="/icons/logo.svg" alt="logo">
                  <ul class="navbar flex">
                        <li v-for="(item, index) in nav_items" :key="`item-${index}`" @click="activeTab = nav_items[index].tab_name == 'hire' ? '' : nav_items[index].tab_name;" :class="[(item.class), (activeTab == nav_items[index].tab_name ? 'active' : '')]">
                              {{$t(item.title)}}
                        </li>
                  </ul>
            </nav>
            <div class="side-items flex align-center">
                  <div class="submit-project">
                        <p class="m-10">ثبت پروژه</p>
                  </div>
                  <langNavigation/>
            </div>
      </div>
</template>

<script>
      import langNavigation from '~/components/custom/langNavigation/langNavigation';
      export default {
            name: 'container',
            components: {langNavigation},
            data(){
                  return {
                        activeTab : 'home',
                        nav_items: [
                              {class: 'p-10', tab_name : 'home', title: 'nav.home'},
                              {class: 'p-10', tab_name : 'contact', title: 'nav.contact'},
                              {class: 'p-10', tab_name : 'about', title: 'nav.about'}
                        ]
                  }
            }
      }
</script>

<style lang='scss'>
      @import './header';
</style>