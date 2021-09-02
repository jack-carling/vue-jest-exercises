<template>
  <section>
    <div
      v-for="(option, index) in options"
      :class="{ selected: option.selected }"
      :key="index"
      @click="selectOption(index)"
      class="option"
    >
      {{ option.name }}
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: 'First',
          selected: false,
        },
        {
          name: 'Second',
          selected: false,
        },
        {
          name: 'Third',
          selected: false,
        },
        {
          name: 'Fourth',
          selected: false,
        },
        {
          name: 'Fifth',
          selected: false,
        },
      ],
    };
  },
  methods: {
    selectOption(index) {
      for (let i = 0; i < this.options.length; i++) {
        if (i === index) {
          this.options[i].selected = true;
          continue;
        }
        this.options[i].selected = false;
      }
    },
  },
};
</script>

<style></style>
