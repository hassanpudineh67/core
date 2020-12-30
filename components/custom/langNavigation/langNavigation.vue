<template>
      <select class="select-language" v-model="selectedValue" @change="onChange(selectedValue)">
            <option disabled value>انتخاب زبان</option>
            <option v-for="(locale, index) in $i18n.locales" :key="index" :value="locale.code">
                  {{locale.name}}
            </option>
      </select>
</template>

<script>
export default {
      data() {
            return {
                  selectedValue: "",
            };
      },
      created() {
            this.selectedValue = this.$i18n.locale;
      },
      methods: {
            onChange(event) {
                  this.$router.replace(this.switchLocalePath(event));
            },
      },
};
</script>

<style lang="scss">
.select-language {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 4px 12px;
      color: black;
}
</style>
