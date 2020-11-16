<template>
  <div id="notification-modal" class="notification-modal hide">
    <div class="notification-modal-triangle-sec">
      <img
        src="../../assets/icons/triangle.svg"
        alt="notification-tri"
        class="notification-tri-icon"
      />
    </div>
    <div class="notification-inner-sec">
      <p class="notification-txt">Notifications</p>
      <div
        id="notification-progressbar"
        class="notification-progressbar"
        v-if="progress"
      >
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div class="notification-modal-inner">
        <a
          href="www.google.com"
          class="notification"
          v-for="(notification, i) in notification"
          :key="i"
        >
          <div class="notification-title-desc">
            <img
              src="../../assets/icons/bell_icon.svg"
              alt="user-icon"
              class="notification-icon"
            />
            <p class="notification-title">{{ notification.title }}</p>
          </div>
          <p class="notification-description">{{ notification.description }}</p>
        </a>
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
      notification: [],
      progress: true,
    };
  },
  created() {
    service.getAllNoificationList().then((res) => {
      this.notification = res.data;
      this.progress = false;
    });
  },
};
</script>

<style scoped>
.notification-modal {
  position: absolute;
}
.notification-tri-icon {
  width: 16px;
  display: block;
  margin-left: 0;
  cursor: pointer;
}
.notification-inner-sec {
  position: absolute;
  top: 22px;
  right: -180px;
  color: #222;
  background: #fff;
  font-family: "Roboto";
  width: 380px;
  padding-top: 6px;
  padding-bottom: 10px;
  z-index: 5;
  box-shadow: 0px 0px 22px -6px #026cd1;
  max-height: 500px;
  overflow: auto;
}
.notification-inner-sec::-webkit-scrollbar {
  width: 4px;
}
.notification-inner-sec::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
.notification-inner-sec::-webkit-scrollbar-thumb {
  background: #45a5ff;
  border-radius: 10px;
}
.notification-inner-sec::-webkit-scrollbar-thumb:hover {
  background: #006ace;
}
.notification-txt {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 4px 40px;
}
.notification-progressbar {
  text-align: center;
  margin: 20px 0;
  color: #026cd1;
}
.notification {
  padding: 6px 40px;
  margin: 6px 0;
  padding-right: 20px;
  display: block;
  text-decoration: none;
  color: #222222;
}
.notification-icon {
  width: 16px;
  display: inline-block;
  vertical-align: middle;
}
.notification-title {
  margin: 0;
  font-size: 14px;
  color: #026cd1;
  display: inline-block;
  margin-left: 11px;
}
.notification-description {
  margin: 4px 0 0;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
</style>