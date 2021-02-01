<template>
  <div id="monthly-delivery-plan" class="monthly-delivery-plan">
    <Heading :pathName="pathName" :routeName="routeName" />
    <div class="monthly-delivery-plan-section">
      <div class="monthly-delivery-plan-inner">
        <MonthlyDeliveryPlanLeftList
          :leftside_da_list="DICWiseUsers_DA_List"
          v-on:selected_month="selectedMonthFromLeft"
          v-on:selected_user_schedule_plan="selectedUserSchedulePlan"
        />
        <div class="monthly-delivery-plan-detail-section">
          <div class="monthly-delivery-plan-detail-inner">
            <div class="monthly-delivery-plan-detail-header-section">
              <div class="monthly-delivery-plan-detail-header-section-inner">
                <div class="delivery-plan-date-section">
                  <div class="date-section">
                    <p class="date-text">
                      <span class="default-text">Delivery Plan:</span>
                      <span
                        class="date-text"
                        v-if="monthlyPlanDetailsSection"
                        >{{ selectedDateMonth }}</span
                      >
                    </p>
                  </div>
                  <div class="select-option-box hide">
                    <div class="default-text">
                      <span>Import Plan From:</span>
                    </div>
                    <div class="select-options">
                      <span class="right-icon"
                        ><i class="fas fa-chevron-right"></i
                      ></span>
                      <!-- <span class="down-icon"><i class="fas fa-chevron-down"></i></span> -->
                      <select title="Pick a month" class="selectpicker">
                        <!-- <option v-for="(month, m) in date" :key="m">{{ month.month }}</option> -->
                        <option value="test 1">Test 1</option>
                        <option value="test 2">Test 2</option>
                        <option value="test 3">Test 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="da-name-contact-number-territory-details-section">
                  <div class="da-name-section">
                    <p class="da-name-text">
                      <span class="default-text">DA Name:</span>
                      <span class="da-name" v-if="monthlyPlanDetailsSection">{{
                        selectedSchedule.name
                      }}</span>
                    </p>
                  </div>
                  <div class="territory-details-section">
                    <!-- <p class="territory-details-text"> -->
                    <p class="territory-details-text" v-if="monthlyPlanDetailsSection">
                      <span class="default-text">Territory:</span>
                      <!-- <span class="territory-details" v-if="monthlyPlanDetailsSection">{{ selectedSchedule.territory_name }}</span> -->
                      <!-- <span class="territory-details" v-for="(territory, t) in total_territory_count" :key="t" >{{territory.territory_name}}</span> -->
                      <!-- <span class="territory-details">{{ total_territory_count[0].territory_name }} <span v-if="total_territory_count.length > 1"><span>&amp;</span> {{ total_territory_count.length - 1}} more</span></span>
                      <span class="tool-tip"><span v-for="(t, i) in total_territory_count" :key="i">{{ t.territory_name }}</span></span> -->
                      <span class="territory-details">{{ territory_area_data_list[0].area_info.area_name }} <span v-if="territory_area_data_list.length > 1"><span>&amp;</span> {{ territory_area_data_list.length - 1}} more</span></span>
                      <span class="tool-tip"><span v-for="(t, i) in territory_area_data_list" :key="i">{{ t.area_info.area_name }}</span></span>
                      <!-- <span>{{ total_territory_count }}</span> -->
                    </p>
                    <div class="add-btn-section" v-if="monthlyPlanDetailsSection">
                      <span class="add-btn-inner" @click="createNewTerritory">
                        <i class="fas fa-plus"></i>
                      </span>
                      <span class="tool-tip">Add more</span>
                      <div class="add-territory-modal" v-if="territory_modal">
                        <div class="add-territory-modal-inner">
                          <p class="title">Select Territory</p>
                          <span class="close-icon" @click="closeTerritoryModal">
                            <i class="fas fa-times"></i>
                            <span class="tool-tip">Close Modal</span>
                          </span>
                          <div class="search-territory">
                            <div class="search-territory-inner">
                              <div class="form-group has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Search by Name, ID No"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="territory-list">
                            <div class="territory-list-inner">
                              <!-- <p class="territory-name" v-for="(t, i) in territory_search_list" :key="i" @click="territoryNameAddClick(t.area_info.display_code)"> -->
                              <p class="territory-name" v-for="(t, i) in all_territory_list_for_this_DA" :key="i" @click="territoryNameAddClick(t)">
                                <!-- <span>{{ t.territory_name }}</span> -->
                                <span>{{ t.area_name }}</span>
                                <!-- <span><span>Code:</span> {{ t.area_info.display_code }}</span>
                                <span><span>Area Name:</span> {{ t.area_info.area_name }}</span> -->
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
            <div class="monthly-delivery-plan-detail-calender-section">
              <div class="monthly-delivery-plan-detail-calender-section-inner">
                <div v-if="monthlyPlanDetailsSection">
                  <!-- <PlanCalendar
                    v-for="(territory, i) in total_territory_count" :key="i"
                    :selectedDate="selectedDate"
                    :territoryData="territory"
                    v-on:selected_date_from_calendar="
                      getSelectedDateFromChildComponentCalendar
                    "
                    v-on:remove_territory_calendar="removeTerritoryCalendar"
                    
                  /> -->
                  <PlanCalendar
                    v-for="(territory, i) in territory_area_data_list" :key="i"
                    :selectedDate="selectedDate"
                    :territoryData="territory"
                    v-on:selected_date_from_calendar="getSelectedDateFromChildComponentCalendar"
                    :create_ok="createOK"
                    v-on:selected_date_from_calendar_destroy="getSelectedDateFromChildComponentCalendarToDestroy"
                    :destroy_ok="destroyOK"
                    v-on:remove_territory_calendar="removeTerritoryCalendar"
                    
                  />
                </div>
              </div>
            </div>
            <div class="monthly-delivery-plan-submit-section">
              <div class="monthly-delivery-plan-submit-section-inner">
                <button class="plan-submit-btn" @click="submitPlan">
                  Set Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "../../../../components/master_layout/HeadingTitleBreadcrumb/HeadingTitleBreadcrumb";
import MonthlyDeliveryPlanLeftList from "./Sidebar/MonthlyDeliveryPlan_LeftList";
import PlanCalendar from "./PlanCalendar/PlanCalendar";

import ERPService from '../../../../service/ERPSidebarService'
const service = new ERPService()

export default {
  components: {
    Heading,
    MonthlyDeliveryPlanLeftList,
    PlanCalendar,
  },
  data() {
    return {
      routeName: "Monthly Delivery Plan",
      parentPath: "Settings & Management",
      selectedDate: null,
      selectedDateMonth: null,
      selectedSchedule: null,
      monthlyPlanDetailsSection: false,
      days: null,
      window_height: null,
      header_height: 74,
      title_height: 73,
      footer_height: 32,
      // newCalendar: false,
      total_territory_names_list: [],
      total_territory_count: null,
      total_territory: null,
      territory_modal: false,
      territory_search_list: [
        {
          territory_name: "Territory Name Hello World 1"
        },
        {
          territory_name: "Territory Name Hello World 2"
        },
        {
          territory_name: "Territory Name Hello World 3"
        },
        {
          territory_name: "Territory Name Hello World 4"
        },
        {
          territory_name: "Territory Name Hello World 5"
        },
        {
          territory_name: "Territory Name Hello World 6"
        },
      ],
      DICWiseUsers_DA_List: [],
      territory_area_data_list: [],
      all_territory_list_for_this_DA: [],
      new_territory_list_by_adding: [],
      YYYY_MM_DD_forNewDayAddingSavedFromLeftSide: null,
      createOK: false,
      destroyOK: false,
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  async mounted() {

    // service.getDICWiseUsers_MonthlyDeliveryPlan()
    //   .then(res => {
    //     console.log(res.data)
    //   })

    // service.getDICDeliveryLocations_MonthlyDeliveryPlan()
    //   .then(res => {
    //     console.log(res.data)
    //   })

    // service.getDICMonthlyDeliveryPlan_MMYYYY_MonthlyDeliveryPlan('022021')
    //   .then(res => {
    //     console.log(res.data)
    //   })

    let curretnYYYY = new Date().getFullYear()
    let currentMM = ((new Date().getMonth() + 1) < 10 ? ('0' + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1) )
    let currentMMYYYY = (currentMM.toString() + curretnYYYY.toString())
    
    this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(currentMMYYYY)
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [
        { name: "Settings & Management" },
        { name: "Monthly Delivery Plan" },
      ];
    },
    selectedMonthFromLeft(date) {
      this.territory_area_data_list = []
        this.territory_modal = false
      if (date) {
        this.createDateForCalender(date);
        let selectedMM = (this.getMonthsNumberFromMonthName(date.split(' ')[0])) < 10 ? ('0' + this.getMonthsNumberFromMonthName(date.split(' ')[0])) : (this.getMonthsNumberFromMonthName(date.split(' ')[0])).toString()
        let selectedYYYY = date.split(' ')[1].toString()
        let selectedMMYYYY = (selectedMM + selectedYYYY).toString()

        this.ALL_DA_INFO_MMYYYY_FROM_SERVICE(selectedMMYYYY)
      }
    },
    async ALL_DA_INFO_MMYYYY_FROM_SERVICE(MMYYYY) {
      await service.getAllDAInfo_MMYYYY_MonthlyDeliveryPlan(MMYYYY)
        .then(res => {
          this.DICWiseUsers_DA_List = res.data.da_info
          this.all_territory_list_for_this_DA = res.data.all_territory_list
        })
    },
    selectedUserSchedulePlan(schedule, selectedMonth) {
      this.territory_area_data_list = []
        this.territory_modal = false
      if (schedule) {
        this.createDateForCalender(selectedMonth)
        this.selectedDate = this.days;
        this.selectedSchedule = schedule;
        this.selectedDateMonth = selectedMonth;
        this.monthlyPlanDetailsSection = true;
        this.total_territory_count = schedule.total_territory ? schedule.total_territory : 0

        let selectedMM = (this.getMonthsNumberFromMonthName(selectedMonth.split(' ')[0])) < 10 ? ('0' + this.getMonthsNumberFromMonthName(selectedMonth.split(' ')[0])) : (this.getMonthsNumberFromMonthName(selectedMonth.split(' ')[0])).toString()
        let selectedYYYY = selectedMonth.split(' ')[1].toString()
        let selectedMMYYYY = (selectedMM + selectedYYYY).toString()
        
        this.YYYY_MM_DD_forNewDayAddingSavedFromLeftSide = selectedYYYY + '-' + selectedMM

        this.MONTHLY_DELIVERY_PLAN_BY_MMYYYY_AND_FORCE_ID_FROM_SERVICE(selectedMMYYYY, schedule.id)
      }
    },
    async MONTHLY_DELIVERY_PLAN_BY_MMYYYY_AND_FORCE_ID_FROM_SERVICE(MMYYYY, FORCE_ID) {
      // this.territory_area_data_list = []
      await service.getMonthlyDeliveryPlanByForceId_MonthlyDeliveryPlan(MMYYYY, FORCE_ID)
          .then(res => {
            console.log(res.data)

            if(res.data.response_code === 200 && res.data.delivery_plan_info.get_dpd_forces.length > 0) {
              this.territory_area_data_list = res.data.delivery_plan_info.get_dpd_forces[0].get_areas
            } else {
              this.territory_area_data_list = []
            }
          })
    },
    createDateForCalender(date) {
      // console.log(this.yearSlice(date) + "-" + this.getMonthsNumberFromMonthName(date.split(" ")[0]))
      // console.log(new Date(2021, 1, 0).getDate())
      let days = [];
      for (
        let i = 0;
        i <
        new Date(
          this.yearSlice(date),
          this.getMonthsNumberFromMonthName(date.split(" ")[0]),
          0
        ).getDate();
        i++
      ) {
        let day = {};
        // console.log(this.getDayNameFromYYYYMMDD(this.yearSlice(date) + "-" + this.getMonthsNumberFromMonthName(date.split(" ")[0]) + "-" + ( i +1 )))
        day.day = this.getDayNameFromYYYYMMDD(
          this.yearSlice(date) +
            "-" +
            this.getMonthsNumberFromMonthName(date.split(" ")[0]) +
            "-" +
            (i + 1)
        );
        days.push(day);
      }
      // this.selectedDate = days;
      this.days = days;
      // console.log(days)
    },
    yearSlice(date) {
      let year = date.split(" ")[1];
      return year;
    },
    getMonthsNumberFromMonthName(monthName) {
      let n = null;
      switch (monthName) {
        case "January":
          n = 1;
          break;
        case "February":
          n = 2;
          break;
        case "March":
          n = 3;
          break;
        case "April":
          n = 4;
          break;
        case "May":
          n = 5;
          break;
        case "June":
          n = 6;
          break;
        case "July":
          n = 7;
          break;
        case "August":
          n = 8;
          break;
        case "September":
          n = 9;
          break;
        case "October":
          n = 10;
          break;
        case "November":
          n = 11;
          break;
        case "December":
          n = 12;
          break;
        default:
          break;
      }
      return n;
    },
    getDayNameFromYYYYMMDD(myDate) {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      var dayInt = new Date(myDate).getDay();
      return days[dayInt].charAt(0);
    },
    getSelectedDateFromChildComponentCalendar(territoryDetails, date) {
      let ID = territoryDetails.id  //not area_id
      let selectedDAY = (date < 10) ? ('0' + date) : date
      let selectedDATE = this.YYYY_MM_DD_forNewDayAddingSavedFromLeftSide + '-' + selectedDAY
      
      this.CREATE_SD_DPD_DAY_FROM_SERVICE(ID, selectedDATE)
    },
    async CREATE_SD_DPD_DAY_FROM_SERVICE(id, date) {
      await service.getCreateSDDpdDay_MonthlyDeliveryPlan(id, date)
        .then(res => {
          console.log(res.data)
          if(res.data.message === "Success!") {
            this.createOK = true
          }
        }).catch(err => {
          console.log("Create Error : " + err)
          this.createOK = false
        })
    },
    getSelectedDateFromChildComponentCalendarToDestroy(territoryDetails, date) {
      let ID = territoryDetails.id  //not area_id
      let selectedDAY = (date < 10) ? ('0' + date) : date
      let selectedDATE = this.YYYY_MM_DD_forNewDayAddingSavedFromLeftSide + '-' + selectedDAY

      this.DESTROY_SD_DPD_DAY_FROM_SERVICE(ID, selectedDATE)
    },
    async DESTROY_SD_DPD_DAY_FROM_SERVICE(id, date) {
      await service.getDestroySDDpdDay_MonthlyDeliveryPlan(id, date)
        .then(res => {
          console.log(res.data)
          if(res.data.message === "Success!") {
            this.destroyOK = true
          }
        }).catch(err => {
          console.log("Destroy Error : " + err)
          this.destroyOK = false
        })
    },
    /*removeTerritoryCalendar(t) {
      let name = t.territory_name
      if(this.total_territory_count.length > 1) {
        for (let [i, tt] of this.total_territory_count.entries()) {
          if (tt.territory_name === name) {
            this.total_territory_count.splice(i, 1);
          }
        }
      }
    },*/
    submitPlan() {
      console.log("Set Plan Clicked");
    },
    createNewTerritory() {
      console.log('create new territory')
      // if(this.total_territory_count) {
      //   console.log(this.total_territory_count)
      //   this.total_territory_count.push({territory_name: "New Territory"})
      // }
      if(this.territory_modal) {
        this.territory_modal = false
      } else {
        this.territory_modal = true
      }
    },
    territoryNameAddClick(t) {
      let AREA_ID = t.id
      // let area_name = t.area_name
      // let area_lvl = t.lvl
      // console.log(area_id + '  ' + area_name + '  ' + area_lvl)
      /*if(name) {
        // console.log(name.territory_name)
        this.total_territory_names_list.push({territory_name: name})
        // this.new_territory_list_by_adding.push()
      }
      this.territory_modal = false
      console.log(this.total_territory_names_list)*/
      // console.log(this.territory_area_data_list)
      if(this.territory_area_data_list.length > 0) {
        let DPF_ID = this.territory_area_data_list[0].dpf_id
        this.CREATE_NEW_SD_DPD_AREA_OR_NEW_TERRITORY(DPF_ID, AREA_ID)
      } else {
        console.log('no territory data')
      }
    },
    async CREATE_NEW_SD_DPD_AREA_OR_NEW_TERRITORY(dpf_id, area_id) {
      console.log(dpf_id + '    ' + area_id)
      await service.getCreateSD_DPD_AREA(dpf_id, area_id)
        .then(res => {
          console.log(res.data)
        }).catch(err => {
          console.log("Destroy Error : " + err)
        })
    },
    closeTerritoryModal() {
      this.territory_modal = false
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./MonthlyDeliveryPlan.less");
</style>