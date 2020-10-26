<template>
  <div class="container">
    <input-text v-model="firstname" :icon_end='false' value="something" label="نام و نام خانوادگی" icon='123' color='#d3a'/>
  </div>
</template>

<script>
import InputText from '~/components/input-text/input-text';

export default {
  components: {
    InputText
  },
  data(){
        return{
              firstname:''
        }
  }
}
</script>