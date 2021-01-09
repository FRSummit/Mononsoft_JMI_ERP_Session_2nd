<template>
  <div id="group-list-section" class="group-list-section hide">
    <div class="group-list-triangle-sec">
      <img
        class="company-tri-icon"
        src="../../assets/icons/triangle.svg"
        alt="group triangle"
      />
    </div>
    <div class="group-list-sec">
      <div id="group-progressbar" class="group-progressbar" v-if="progress">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div class="comapny-list-sec">
        <div class="comapny-sec" v-for="(comapny, i) in company_list" :key="i">
          <p class="company-name">{{ comapny.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ERPSidebarService from "../../service/ERPSidebarService";
const service = new ERPSidebarService();

export default {
  data() {
    return {
      company_list: [],
      progress: true,
    };
  },
  created() {
    service.getAllCompanyList().then((res) => {
      this.company_list = res.data;
      this.progress = false;
    });
  },
};
</script>

<style scoped>
.group-list-section {
  position: absolute;
}
.group-progressbar {
    text-align: center;
    margin: 20px 0;
    color: #026cd1;
}
.group-list-section .company-tri-icon {
  width: 16px;
  display: block;
  margin-left: 14px;
  cursor: pointer;
}
.group-list-section .group-list-sec {
  background: #ffffff;
  color: #026cd1;
  width: 250px;
  max-height: 200px;
  box-shadow: 0px 5px 5px 2px #d0d0d04d;
  padding: 10px 10px;
  overflow: auto;
  margin-top: 16px;
  margin-left: -94px;
  z-index: 5;
  /* position: absolute; */
  position: fixed;
}
.group-list-section .comapny-sec {
  padding: 0 10px;
}
.group-list-section .comapny-sec:hover {
  background: #026cd1;
  color: #ffffff;
  border-radius: 4px;
}
.group-list-section .company-name {
  margin: 0;
  font-size: 18px;
  padding: 10px 0;
  width: 100%;
}
.group-list-sec::-webkit-scrollbar {
  width: 4px;
}
.group-list-sec::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
.group-list-sec::-webkit-scrollbar-thumb {
  background: #168fff;
  border-radius: 10px;
}
.group-list-sec::-webkit-scrollbar-thumb:hover {
  background: #004e98;
}
@-moz-document url-prefix() {
  .group-list-sec {
    overflow-y: scroll;
    scrollbar-color: #168fff #c9c9c9;
    scrollbar-width: thin;
  }
}
</style>