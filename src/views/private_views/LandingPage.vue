<template>
  <div class="landing-page">
    Landing Page
    <router-link to="/about">About</router-link>
    <br />
    <router-link to="/competitors-data-mgt"
      >Competotprs Data Management</router-link
    >
    <br />
    <router-link to="/adm/settings&amp;management/sbu">SBU</router-link>
    <br />
    <br />
    <h1 id="printMe">Print me!</h1>
    <br />
    <br />
    <button @click="print">Print</button>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      output: null,
    };
  },
  methods: {
    print() {
      console.log("working");
      this.$htmlToPaper("printMe", null, () => {
        console.log("Printing completed or was cancelled!");
      });
    },
  },
};
</script>

<style scoped>
button {
  background: #026cd1;
  color: #fff;
  padding: 7px 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>