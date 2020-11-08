import { shallowMount } from "@vue/test-utils";
import input from "../input-text/input-text.vue";


const factory = () => {
  return shallowMount(input, {
  });
};

describe("input", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
});