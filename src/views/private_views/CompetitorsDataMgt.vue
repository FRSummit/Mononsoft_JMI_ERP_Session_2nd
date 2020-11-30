<template>
  <div id="competitor-data-management" class="competitor-data-management">
    <!-- <h1 style="text-align: center">Datatable with 3rd Party API</h1>
    <v-data-table
      :page="page"
      :pageCount="numberOfPages"
      :headers="headers"
      :items="passengers"
      :options.sync="options"
      :server-items-length="totalPassengers"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:[`item.logo`]="{ item }">
        <img :src="item.airline.logo" style="width: 10%" />
      </template>
      <template v-slot:[`item.website`]="{ item }">
        <a :href="item.airline.website">{{ item.airline.website }}</a>
      </template>
    </v-data-table> -->
    <div class="top-intro-section">
      <div class="title-breadcrumb-section">
        <p class="page-title">Competitor Data Management</p>
        <p class="breadcrumb">Settings &amp; Management > Competitor List</p>
      </div>
      <div class="pagination-section">
        <div class="total-entries">
          <label class="title">Entries</label>
          <div class="drop-down-arrow">
            <i class="fa fa-angle-down"></i>
          </div>
          <select id="entry-select" class="entry-select">
            <i class="fa fa-angle-down"></i>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>

          <!-- <v-container fluid>
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="6">
                <v-select :items="items" label="Standard" dense></v-select>
              </v-col>
            </v-row>
          </v-container> -->
        </div>
        <div class="pagination">
          <div class="page-infos">
            <span
              >{{ pageDataStart }} - {{ pageDataEnd }} of
              {{ totalPagesData }}</span
            >
          </div>
          <div class="arrow-section">
            <div class="left-arrow">
              <a href="#!"><i class="fa fa-angle-left"></i></a>
            </div>
            <div class="right-arrow">
              <a href="#!"><i class="fa fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table
      id="dtBasicExample"
      class="table table-striped table-bordered table-sm"
      cellspacing="0"
      width="100%"
    >
      <thead>
        <tr>
          <th class="th-sm">NAME</th>
          <th class="th-sm">CODE</th>
          <th class="th-sm">ADDRESS</th>
          <th class="th-sm">MARKET SHARE</th>
          <th class="th-sm">MARKET SIZE (BDT)</th>
          <th class="th-sm">MAJOR PRODUCTS</th>
          <th class="th-sm">Add</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>RX Pharmacy</td>
          <td>JMI-2231225</td>
          <td>15 Genda, Dhaka-Aricha Hwy, Savar Union, Dhaka 1212</td>
          <td>13%</td>
          <td>100000000</td>
          <td>20</td>
          <td></td>
        </tr>
        <tr>
          <td>RX Pharmacy</td>
          <td>JMI-2231225</td>
          <td>15 Genda, Dhaka-Aricha Hwy, Savar Union, Dhaka 1212</td>
          <td>13%</td>
          <td>100000000</td>
          <td>20</td>
          <td></td>
        </tr>
        <tr>
          <td>RX Pharmacy</td>
          <td>JMI-2231225</td>
          <td>15 Genda, Dhaka-Aricha Hwy, Savar Union, Dhaka 1212</td>
          <td>13%</td>
          <td>100000000</td>
          <td>20</td>
          <td></td>
        </tr>
      </tbody>
      <!-- <tfoot>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </tfoot> -->
    </table>
  </div>
</template>

<script>
import ERPSidebarService from "../../service/ERPSidebarService";
const service = new ERPSidebarService();

export default {
  name: "DatatableComponent",
  data() {
    return {
      page: 0,
      totalPassengers: 0,
      numberOfPages: 0,
      passengers: [],
      loading: true,
      options: {},
      headers: [
        { text: "Passenger Name", value: "name" },
        { text: "Number Of Trips", value: "trips" },
        { text: "Airline", value: "airline[0].name" },
        { text: "Logo", value: "logo" },
        { text: "Website", value: "website" },
      ],
      // Customization
      pageDataStart: 1,
      pageDataEnd: 12,
      totalPagesData: 1003,
      items: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  //this one will populate new data set when user changes current page.
  watch: {
    options: {
      handler() {
        this.readDataFromAPI();
      },
    },
    deep: true,
  },
  methods: {
    //Reading data from API method.
    readDataFromAPI() {
      this.loading = true;
      const { page, itemsPerPage } = this.options;
      let pageNumber = page - 1;
      service.getPassengersList(itemsPerPage, pageNumber).then((response) => {
        //Then injecting the result to datatable parameters.
        this.loading = false;
        this.passengers = response.data[0].data;
        this.totalPassengers = response.data[0].totalPassengers;
        this.numberOfPages = response.data[0].totalPages;
        console.log(response.data);
        console.log(response.data[0]);
      });
    },
  },
  //this will trigger in the onReady State
  mounted() {
    this.readDataFromAPI();
  },
};
</script>

<style scoped>
.top-intro-section {
  margin-bottom: 20px;
}
.title-breadcrumb-section {
  display: inline-block;
  width: 70%;
}
.page-title {
  margin: 0 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 10px;
}
.breadcrumb {
  background: snow;
  padding: 0 0;
  display: block;
  margin: 0 0;
  line-height: 1;
  color: #026cd1;
  text-decoration: none;
  font-size: 11px;
}
.breadcrumb::before {
  display: none;
}
.pagination-section {
  display: inline-block;
  width: 30%;
}
.total-entries {
  display: inline-block;
  position: relative;
}
.total-entries .title {
  display: inline-block;
  color: #212529;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.5px;
}
.total-entries .drop-down-arrow {
  position: absolute;
  right: 0;
  top: 4px;
}
.total-entries .drop-down-arrow .fa-angle-down {
    font-size: 10px;
    height: 20px;
    width: 20px;
    background: #d3efff;
    border-radius: 20px;
}
.total-entries .entry-select {
  display: inline-block;
  width: 40px;
  height: auto;
  color: #212529;
    border: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    outline: none;
}
.pagination {
  display: flex;
  float: right;
}
.page-infos span {
  font-size: 12px;
  font-weight: 800;
}
.arrow-section {
  line-height: 1;
  margin-left: 20px;
}
.left-arrow {
  display: inline-block;
}
.right-arrow {
  display: inline-block;
  margin-left: 20px;
}
.fa-angle-left {
  font-size: 16px;
  height: 20px;
  width: 20px;
  background: #d3efff;
  border-radius: 20px;
}
.fa-angle-right {
  font-size: 16px;
  height: 20px;
  width: 20px;
  background: #d3efff;
  border-radius: 20px;
}
</style>