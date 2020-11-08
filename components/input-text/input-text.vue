<template>
      <div class="input__container">
            <div :class="'input__effect ' + filled">
                  <input class="mt-3" type="text" :value="value" :placeholder="placeholder" @input="$emit('input', $event.target.value)" :class="'effect ' + has__icon + is__not__linear" @focus="show = !show" @blur="show = !show" @change="$emit('change', $event.target.value)"/>
                  <label :class="[{'has__content': value}, linear? 'label_linear' : 'label_not_linear']" class="inline text--cray-800 font--weight-500 mb-4 pl-6 pr-6">{{ label }}</label>
                  <span :class="linear? 'focus__border':null" :style="focus__border"></span>
                  <div class="input__icon inline-block end--icon" :style="{ 'background-image': 'url(' + icon_name + ')',}"></div>
            </div>
            <span class="input__hint" v-if="show">{{ hint }}</span>
      </div>
</template>

<script>
      export default {
            data: () => ({
                  show: false,
            }),
            computed: {
                  filled() {
                        if (!this.show && this.value) return "has__content";
                        return "";
                  },
                  has__icon() {
                        if (this.icon) return "input__has__icon";
                        return;
                  },
                  is__not__linear() {
                        if (!this.linear) return " not__linear";
                        return;
                  },
                  focus__border() {
                        return {
                              "background-color": this.color,
                        };
                  },
                  isEndIcon() {
                        return this.end;
                  },
                  icon_name() {
                        return `/icons/${this.icon}`;
                  },
            },
            props: {
                  value: { type: String, required: false, default: "" },
                  label: { type: String, required: false, default: "" },
                  hint: { type: String, required: false, default: "" },
                  icon: { type: String, required: false, default: "" },
                  placeholder: { type: String, required: false, default: "" },
                  color: { type: String, required: false, default: "indigo" },
                  linear: { type: Boolean, required: false, default: false }
            },
      };
</script>

<style lang='scss'>
@import "./input-text.scss";
</style>