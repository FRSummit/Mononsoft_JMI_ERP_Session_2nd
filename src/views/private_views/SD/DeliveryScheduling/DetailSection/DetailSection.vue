<template>
  <div class="delivery-schedule-detail-section">
    <div class="delivery-schedule-detail-section-inner">
      <div class="delivery-scheduling-detail-header-section">
        <div class="delivery-scheduling-detail-header-section-inner">
          <div class="title-date-section">
            <div class="title-date-section-inner">
              <div class="title-section">
                <p>DSID:<span>#</span></p>
              </div>
              <div class="date-section">
                <p>Current Date: <span>10/01/2021</span></p>
              </div>
            </div>
          </div>
          <div class="start-end-point-selection-section">
            <div class="start-end-point-selection-section-inner">
              <div class="start-point-section">
                <div class="start-point-section-inner">
                  <div class="start-point-title">
                    <p>Select Starting Point</p>
                  </div>
                  <div class="select-options">
                    <span class="right-icon"
                      ><i class="fas fa-chevron-right"></i
                    ></span>
                    <!-- <span class="down-icon"><i class="fas fa-chevron-down"></i></span> -->
                    <select
                      title="Pick an address"
                      class="selectpicker"
                      v-model="selectStartAddress"
                      @change="onChange()"
                    >
                      <option
                        v-for="(address, m) in start_address_list"
                        :key="m"
                      >
                        {{ address.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="location-separator">
                <div class="location-separator-inner">
                  <span class="start"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span class="dot"></span>
                  <span><i class="fas fa-map-marker-alt"></i></span>
                </div>
              </div>
              <div class="end-point-section">
                <div class="end-point-section-inner">
                  <div class="end-point-title">
                    <p>Select Ending Point</p>
                  </div>
                  <div class="select-options">
                    <span class="right-icon"
                      ><i class="fas fa-chevron-right"></i
                    ></span>
                    <!-- <span class="down-icon"><i class="fas fa-chevron-down"></i></span> -->
                    <select
                      title="Pick an address"
                      class="selectpicker"
                      v-model="selectEndAddress"
                      @change="onChange()"
                    >
                      <option v-for="(address, m) in end_address_list" :key="m">
                        {{ address.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="route-finder-btn-section">
                <div class="route-finder-btn-section-inner">
                  <button @click="findRoute"><i class="fas fa-exchange-alt"></i>Find Route</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="delivery-scheduling-detail-map-section">
        <div class="delivery-scheduling-detail-map-section-inner">
          <!-- <div>
            <h2>Search and add a pin</h2>
            <label>
              <gmap-autocomplete @place_changed="setPlace"> </gmap-autocomplete>
              <button @click="addMarker">Add</button>
            </label>
            <br />
          </div>
          <br /> -->
          <gmap-map
            :center="center"
            :zoom="14"
            style="width: 100%; height: 400px"
          >
            <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="centerClick(m.position)"
            ></gmap-marker>
            <!-- <gmap-marker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              @click="center = m.position"
            ></gmap-marker> -->
          </gmap-map>
        </div>
      </div>
      <div class="delivery-scheduling-submit-section">
        <div class="delivery-scheduling-submit-section-inner">
          <button class="plan-submit-btn" @click="saveRoute">
            Save Route
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as VueGoogleMaps from 'vue2-google-maps'
// import { google } from 'google-maps';

export default {
  data() {
    return {
      start_address_list: [
        {
          name: "Address 1",
        },
        {
          name: "Address 2",
        },
        {
          name: "Address 3",
        },
        {
          name: "Address 4",
        },
      ],
      end_address_list: [
        {
          name: "Address 1",
        },
        {
          name: "Address 2",
        },
        {
          name: "Address 3",
        },
        {
          name: "Address 4",
        },
      ],
      // center: { lat: 45.508, lng: -73.587 },
      center: { lat: 23.74289, lng: 90.39597 },
      // markers: [],
      markers: [
        // {
        //   position: {
        //     lat: this.center.lat,
        //     lng: this.center.lng,
        //   },
        //   title: "Current position",
        // },
        {
          position: {
            lat: 23.74289,
            lng: 90.39597,
          },
          title: "Teting",
        },
        {
          position: {
            lat: 23.74519,
            lng: 90.40410,
          },
          title: "Teting",
        },
        {
          position: {
            lat: 23.74423,
            lng: 90.40503,
          },
          title: "Teting",
        },
        {
          position: {
            lat: 23.74213,
            lng: 90.39848,
          },
          title: "Teting",
        },
      ],
      places: [],
      currentPlace: null,
      directionsService: null,
      directionsRenderer: null,
    };
  },
  created() {
    /*const API_KEY = 'AIzaSyDl9xch1enBwqVj7OQwuLU6q1AoPkqviyI';
    const url = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    const s = document.createElement("script");
    s.src=url;
    document.head.appendChild(s);
    this.directionsService = new window.google.maps.DirectionsService();
    this.directionsRenderer = new window.google.maps.DirectionsRenderer();*/
  // console.log(directionsService)
  // console.log(directionsRenderer)
    //get user coordinates from browser request
    this.$getLocation({})
      .then( coordinates => {
        console.log(coordinates)
      })
  },
  mounted() {
    // this.directionsService = new google.maps.DirectionsService();
    // this.directionsRenderer = new google.maps.DirectionsRenderer();
    // console.log(this.directionsService)
    // console.log(this.directionsRenderer)
    // this.geolocate();
        // VueGoogleMaps.loaded.then( (res) => {
        //   console.log(res)
        //   this.directionsService = new VueGoogleMaps.gmapApi.maps.DirectionsService();
        //   this.directionsRenderer = new VueGoogleMaps.gmapApi.maps.DirectionsRenderer();
        // })
        // if(VueGoogleMaps) {
          // console.log(VueGoogleMaps)
        //   this.directionsService = new VueGoogleMaps.gmapApi.maps.DirectionsService();
        //   this.directionsRenderer = new VueGoogleMaps.gmapApi.maps.DirectionsRenderer();
        // }
        // console.log(new google.maps.DirectionsService())
        // console.log(google)
  },

  methods: {
    centerClick(m) {
      console.log(m)
    },
    findRoute() {
      console.log('find route')
    },
    saveRoute() {
      console.log('save route')
    },
    // receives a place object via the autocomplete component
    // setPlace(place) {
    //   this.currentPlace = place;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng(),
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    geolocate() {
      console.log("here");
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("here 2");
        console.log(this.markers);
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        // this.addCurrentLocation(position)
        // this.markers.push(this.center)
      });
      this.markers.push({
        position: {
          lat: this.center.lat,
          lng: this.center.lng
        }
      })
      console.log(this.markers)
    },

    // addCurrentLocation(p) {
    //   let position = {
    //     lat: p.coords.latitude,
    //     lng: p.coords.longitude,
    //   };
    //   this.markers.push({ position, title: "test" });
    // },
  },
};
</script>

<style lang="less" scoped>
@import url("./DetailSection.less");
</style>