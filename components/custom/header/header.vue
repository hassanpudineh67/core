<template>
      <div class="header">
            <nav class="flex align-center justify-center p-5">
                  <img class="logo" src="/icons/logo.svg" alt="logo">
                  <ul class="navbar flex">
                        <li v-for="(item, index) in nav_items" :key="`item-${index}`" @click="activeTab = nav_items[index].tab_name == 'hire' ? '' : nav_items[index].tab_name;" :class="[(item.class), (activeTab == nav_items[index].tab_name ? 'active' : '')]">
                              {{$t(item.title)}}
                        </li>
                  </ul>
                  <langNavigation/>
            </nav>
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
                              {class: 'p-10 ml-25', tab_name : 'home', title: 'pages.home'},
                              {class: 'p-10 ml-25', tab_name : 'contact', title: 'pages.contact'},
                              {class: 'p-10 ml-25', tab_name : 'about', title: 'pages.about'},
                              {class: 'hire ml-10', tab_name : 'hire', title: 'pages.hire'},
                        ]
                  }
            }
      }
</script>

<style lang='scss'>
      @import './header';
</style>