<template>
       <div class="intro">
            <nav class="flex align-center justify-between p-5">
                  <div class="title mr-10">
                        <span class="font-24 mr-75 font--weight-600">LOGO</span>
                  </div>
                  <ul class="navbar flex">
                        <li class="home p-10 ml-25" @click="activeTab='home'" :class="{'active':activeTab == 'home'}">صفحه اصلی</li>
                        <li class="projects p-10 ml-25" @click="activeTab='projects'" :class="{'active':activeTab == 'projects'}">
                              پروژه های من
                        </li>
                        <li class="about p-10 ml-25" @click="activeTab='about'" :class="{'active':activeTab == 'about'}">درباره ی من</li>
                        <li class="contact p-10 ml-10" @click="activeTab='contact'" :class="{'active':activeTab == 'contact'}">تماس با من</li>
                  </ul>
            </nav>
      </div>
</template>

<script>
      export default {
            name: 'container',
            data(){
                  return {
                        activeTab : 'home'
                  }
            }
      }
</script>

<style lang='scss'>
      @import './header';
</style>