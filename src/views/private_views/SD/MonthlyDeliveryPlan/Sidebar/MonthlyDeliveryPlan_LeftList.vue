<template>
  <div
    id="monthly-delivery-plan-left-list"
    class="monthly-delivery-plan-left-list"
  >
    <div class="monthly-delivery-plan-list-section">
      <div class="monthly-delivery-plan-list-section-inner">
        <div class="search-section">
          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              class="form-control"
              placeholder="Search by Name, ID No"
            />
          </div>
          <i class="fas fa-filter"></i>
        </div>
        <div class="month-selection-section">
          <div class="month-selection-section-inner">
            <div class="select-option-label">
              <p class="month-selection-label">Select Month</p>
            </div>
            <div class="select-options">
              <span class="right-icon"
                ><i class="fas fa-chevron-right"></i
              ></span>
              <!-- <span class="down-icon"><i class="fas fa-chevron-down"></i></span> -->
              <select
                title="Pick a date"
                class="selectpicker" v-model="selectedMonth" @change="onChange()"
              >
                <option v-for="(month, m) in months" :key="m">
                  {{ month.month }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="monthly-list-section">
          <div class="monthly-list-section-inner">

            <div id="monthly-plan-list-progressbar" class="monthly-plan-list-progressbar" v-if="!leftside_da_list.length">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <!-- <div
              class="monthly-delivery-plan-section-list"
              v-for="(plan, p) in delivery_plan_list"
              :key="p"
              @click="selectLeftUserSchedule(plan)"
            > -->
            <div
              class="monthly-delivery-plan-section-list"
              v-for="(plan, p) in leftside_da_list"
              :key="p"
              @click="selectLeftUserSchedule(plan)"
            >
              <div class="monthly-delivery-plan-section-list-inner">
                <div class="name-status-section">
                  <div class="name-section">
                    <!-- <p class="name-text">{{ plan.name }}</p> -->
                    <!-- <p class="name-text">{{ plan.name }}<span class="tool-tip">{{ plan.name }}</span></p> -->
                    <p class="name-text">{{ plan.name }}</p>
                  </div>
                  <!-- <div class="status-section">
                    <span class="status-color" :class="plan.status"></span>
                    <p class="status-text" :class="plan.status"> -->
                      <!-- {{ plan.status }} -->
                      <!-- {{ plan.status ? plan.status : "Available" }} -->
                      <!-- {{ plan.status }}
                    </p>
                  </div> -->
                </div>
                <div class="contact-number-section">
                  <!-- <p class="contact-number">{{ plan.contact_number }}</p> -->
                  <p class="contact-number">{{ plan.person_info.phone }}</p>
                </div>
                <div class="territory-text-section">
                  <!-- <p class="territory-text">{{ plan.territory_name }}</p> -->
                  <!-- <p class="territory-text">{{ plan.territory_name ? plan.territory_name : "Territory Name 1, Territory Name 2" }}</p> -->
                  <p class="territory-text">Total Territory: {{ plan.total_territory ? plan.total_territory : 0 }}</p>
                  <!-- <p class="territory-text">{{ "Territory Name 1, Territory Name 2" }}</p> -->
                  
                  <div class="status-section">
                    <span class="status-color" :class="plan.status"></span>
                    <p class="status-text" :class="plan.status">
                      {{ plan.status }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["leftside_da_list"],
  data() {
    return {
      months: [],
      selectedMonth: null,
      delivery_plan_list: [
        {
          name: "Fayazur Rahman Summit",
          status: "Available",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Available",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 3, Territory Name 4",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Occupied",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 5",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Occupied",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 6, Territory Name 7",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Occupied",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Available",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Occupied",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Available",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Occupied",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Available",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Available",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
        {
          name: "Fayazur Rahman Summit",
          status: "Available",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
        {
          name: "F R Summit",
          status: "Available",
          contact_number: "+8801687858300",
          territory_name: "Territory Name 1, Territory Name 2",
          attribute_1: "Test Attribute"
        },
      ],
    };
  },
  created() {
      this.monthSelectionDropdownCreate()
    //   this.selectedMonth = this.months[0].month
  },
  mounted() {
    this.selectedMonth = this.months[0].month
    // document.querySelector('#monthly-delivery-plan-left-list .selectpicker option').attributes('selected', true)
    // let defaultSelectedItem = document.querySelector('#monthly-delivery-plan-left-list .selectpicker')
    // console.log(defaultSelectedItem.options[0])
    // defaultSelectedItem.options[0].setAttribute('selected', true)
  },
  methods: {
    onChange() {
        // console.log(this.selectedMonth)
        this.$emit("selected_month", this.selectedMonth);
    },
    selectLeftUserSchedule(plan) {
        this.$emit("selected_user_schedule_plan", plan, this.selectedMonth);
    },
    monthSelectionDropdownCreate() {
        let currentYear = new Date().getFullYear()
        let currentMonth = new Date().getMonth() + 1
        for(let i=0; i<6; i++) {
            let m = {}
            if(this.getMonthName(currentYear + "-" + (currentMonth + i) + "-18") !== undefined) {
                m.month = this.getMonthName(currentYear + "-" + (currentMonth + i) + "-18") + " 2021"
            } else {
                m.month = this.getMonthName((currentYear + 1) + "-" + (currentMonth + i - 12) + "-18") + " 2022"
            }
            this.months.push(m)
        }
        // console.log(this.months)
    },
    getMonthName(month) {
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      var monthInt = new Date(month).getMonth();
      return months[monthInt];
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./MonthlyDeliveryPlan_LeftList.less");
</style>