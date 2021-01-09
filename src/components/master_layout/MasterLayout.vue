<template>
  <div id="master-layout" class="master-layout">
    <!-- header section -->
    <div id="header" class="header" v-if="privatePage">
      <div class="left-section">
        <div class="hamburger-menu-section">
          <span class="hamburger" @click="toggleNav()">&#9776;</span>
        </div>
        <div class="logo-section">
          <img
            class="group-logo"
            src="../../assets/images/Nipro JMI pharma-01.png"
            alt=""
            style="max-height: 40px"
          />
        </div>
        <div class="group-name-section">
          <p class="group-name">Nipro JMI Pharma</p>
        </div>
        <div class="group-selection-dropdown-section">
          <img
            class="group-selection-icon"
            src="../../assets/icons/role.png"
            alt="pharma-logo"
            @click="selectGroup()"
          />
          <GroupModal />
        </div>
      </div>
      <div class="right-section">
        <div class="chat-section" @click="chatIconClick()">
          <img
            class="chat-icon-chat"
            src="../../assets/icons/chat.svg"
            alt="chat-icon"
          />
          <span class="chat-circle"></span>
          <ChatModal />
        </div>
        <div class="notification-section" @click="bellIconClick()">
          <img
            class="bell-icon-chat"
            src="../../assets/icons/bell.svg"
            alt="bell-icon"
          />
          <span class="bell-circle"></span>
          <NotificationModal />
        </div>
        <div class="profile-section" @click="profileClick()">
          <div class="profile-img-section">
            <img
              class="user-icon"
              src="../../assets/icons/user.png"
              alt="user"
            />
          </div>
          <div class="profile-desc-section">
            <div>
              <p class="profile-name">Fahim Bin Najib</p>
              <img
                class="profile-arrow"
                src="../../assets/icons/down-arrow.png"
                alt=""
              />
            </div>
            <p class="profile-designation">Software Solution Architect</p>
          </div>
          <ProfileModal />
        </div>
      </div>
    </div>

    <!-- sidebar section -->
    <div
      id="sidenavbar"
      class="sidenavbar"
      v-if="privatePage"
      @mouseover="sidebarHoverOver()"
      @mouseleave="sidebarHoverLeave()"
    >
      <SidenavMenu />
    </div>
    <div id="main-section">
      <router-view v-on:routeName="currentRouteName" />
    </div>

    <!-- Footer Section -->
    <div id="footer" class="footer" v-if="privatePage">
      <div class="footer-inner">
        <p>New Life Hospital Opening Ceremony Going On</p>
        <p>New Life Hospital Opening Ceremony Going On</p>
        <p>New Life Hospital Opening Ceremony Going On</p>
      </div>
    </div>
  </div>
</template>

<script>
// import SidenavMenu from "./SidenavMenu";
import SidenavMenu from "./SidenavMenu2";
import GroupModal from "./GroupModal";
import NotificationModal from "./NotificationModal";
import ChatModal from "./ChatModal";
import ProfileModal from "./ProfileModal";

// import ERPSidebarService from '../../service/ERPSidebarService';
// const service = new ERPSidebarService();

export default {
  components: {
    SidenavMenu,
    GroupModal,
    NotificationModal,
    ChatModal,
    ProfileModal,
  },
  data() {
    return {
      sidenav: false,
      authenticated: this.$store.state.userIsAuthorized,
      privatePage: false,
    };
  },
  created() {},
  mounted() {
    console.log(this.$route.name);
  },
  methods: {
    toggleNav() {
      if (this.sidenav) {
        this.sidenav = false;
        document.getElementById("sidenavbar").style.width = "60px";
        document.querySelector(".menu-section-inner").style.left = "-350px";
        document.querySelector(".menu-section-colps-icon").style.right = "0px";
      } else {
        this.sidenav = true;
        document.getElementById("sidenavbar").style.width = "350px";
        document.querySelector(".menu-section-inner").style.left = "0px";
        document.querySelector(".menu-section-colps-icon").style.right =
          "-60px";
      }
    },
    selectGroup() {
      this.modalToggle("group-list-section");
    },
    chatIconClick() {
      this.modalToggle("chat-modal");
    },
    bellIconClick() {
      this.modalToggle("notification-modal");
    },
    profileClick() {
      this.modalToggle("profile-modal");
      this.profileArrowRotation();
    },
    modalToggle(id) {
      if (document.querySelector("#" + id).className === id + " hide") {
        this.closeOtherModals(id);
        document.querySelector("#" + id).className = id;
      } else {
        document.querySelector("#" + id).className = id + " hide";
      }
    },
    closeOtherModals(currentModal) {
      let modals = [
        { name: "group-list-section" },
        { name: "chat-modal" },
        { name: "notification-modal" },
        { name: "profile-modal" },
      ];

      for (let i = 0; i < modals.length; i++) {
        let selectedSelector = document.querySelector("#" + modals[i].name);
        if (currentModal !== modals[i].name) {
          if (selectedSelector.className === modals[i].name) {
            selectedSelector.className = modals[i].name + " hide";
          }
        }
      }
    },
    profileArrowRotation() {
      if (
        document.querySelector(".profile-arrow").className === "profile-arrow"
      ) {
        document.querySelector(".profile-arrow").className =
          "profile-arrow profile-arrow-rotation";
      } else {
        document.querySelector(".profile-arrow").className = "profile-arrow";
      }
    },
    currentRouteName(name) {
      if (name !== "Login") {
        this.privatePage = true;
      }
    },
    sidebarHoverOver() {
      if (!this.sidenav) {
        document.getElementById("sidenavbar").style.width = "350px";
        document.querySelector(".menu-section-inner").style.left = "0px";
        document.querySelector(".menu-section-colps-icon").style.right = "-60px";
      }
    },
    sidebarHoverLeave() {
      if (!this.sidenav) {
        document.getElementById("sidenavbar").style.width = "60px";
        document.querySelector(".menu-section-inner").style.left = "-350px";
        document.querySelector(".menu-section-colps-icon").style.right = "0px";
      }
    },
  },
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>