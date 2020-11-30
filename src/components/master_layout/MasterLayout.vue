<template>
  <div id="master-layout" class="master-layout">
    <!-- header section -->
    <div class="header">
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
    <div id="sidenavbar" class="sidenavbar">
      <SidenavMenu :sidenav="sidenav" />
    </div>
    <div id="main-section">
      <router-view />
    </div>

    <!-- Footer Section -->
    <div id="footer" class="footer">
      <div class="footer-inner">
        <p>New Life Hospital Opening Ceremony Going On</p>
        <p>New Life Hospital Opening Ceremony Going On</p>
        <p>New Life Hospital Opening Ceremony Going On</p>
      </div>
    </div>
  </div>
</template>

<script>
import SidenavMenu from "./SidenavMenu";
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
      authenticated: this.$store.state.userIsAuthorized
    };
  },
  created() {
  },
  mounted() {},
  methods: {
    toggleNav() {
      if (this.sidenav) {
        this.sidenav = false;
        document.getElementById("sidenavbar").style.width = "60px";
        document.getElementById("main-section").style.marginLeft = "60px";
        document.getElementById("footer").style.left = "60px";
      } else {
        this.sidenav = true;
        document.getElementById("sidenavbar").style.width = "220px";
        document.getElementById("main-section").style.marginLeft = "220px";
        document.getElementById("footer").style.left = "220px";
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
      if(document.querySelector('.profile-arrow').className === "profile-arrow") {
        document.querySelector('.profile-arrow').className = "profile-arrow profile-arrow-rotation"
      } else {
        document.querySelector('.profile-arrow').className = "profile-arrow"
      }
    }
  },
};
</script>

<style scoped>
.header {
  background: #026cd1;
  color: #fff;
  padding: 8px 0;
  width: 100%;
  overflow: hidden;
}
.left-section {
  float: left;
}
.hamburger-menu-section {
  display: inline-block;
  margin: 0 20px;
}
.hamburger-menu-section .hamburger {
  font-size: 30px;
  cursor: pointer;
  vertical-align: middle;
}
.logo-section {
  display: inline-block;
  vertical-align: middle;
  margin: 0 20px;
}
.group-name-section {
  display: inline-block;
  vertical-align: middle;
}
.group-name {
  font-size: 24px;
  font-family: "Roboto";
  margin: 0;
  display: inline-block;
  margin-left: 20px;
}
.group-selection-dropdown-section {
  display: inline-block;
  vertical-align: middle;
}
.group-selection-icon {
  width: 18px;
  display: inline-block;
  margin-left: 14px;
  cursor: pointer;
}
.right-section {
  float: right;
}
.chat-section {
  display: inline-block;
  margin: 0 16px;
  cursor: pointer;
}
.chat-icon-chat {
  width: 16px;
}
.chat-circle {
  height: 10px;
  width: 10px;
  background-color: #fcc428;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: -4px;
  margin-left: -8px;
}
.notification-section {
  display: inline-block;
  margin: 0 16px;
  cursor: pointer;
}
.bell-icon-chat {
  width: 16px;
}
.bell-circle {
  height: 10px;
  width: 10px;
  background-color: #fcc428;
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  margin-top: -2px;
  margin-left: -8px;
}
.profile-section {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
.profile-img-section {
  display: inline-block;
  margin-right: 6px;
}
.user-icon {
  width: 30px;
  border-radius: 40px;
  border: 2px solid #ffffff;
  vertical-align: bottom;
}
.profile-desc-section {
  display: inline-block;
  text-align: left;
}
.profile-name {
  margin: 0;
  font-size: 14px;
  font-family: "Roboto";
  margin-bottom: 2px;
  display: inline-block;
}
.profile-arrow {
  width: 10px;
  display: inline-block;
  vertical-align: middle;
  margin-top: -4px;
  margin-left: 14px;
  cursor: pointer;
}
.profile-arrow-rotation {
  transform: rotate(180deg);
}
.profile-designation {
  margin: 0;
  font-size: 11px;
  font-family: "Roboto";
}

/* Sidebar */
.sidenavbar {
  height: 100%;
  width: 60px;
  position: fixed;
  z-index: 1;
  top: 60px;
  left: 0;
  background-color: #fffdf8;
  /* overflow-x: hidden; */
  transition: 0.5s;
  /* padding-top: 60px; */
  border-right: 2px solid #fff4da;
}
.sidenavbar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.sidenavbar a:hover {
  color: #f1f1f1;
}
.sidenavbar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
#main-section {
  transition: margin-left 0.5s;
  padding: 10px;
  margin-left: 60px;
}

/* Footer */
.footer {
  background: #36454f;
  color: #fff;
  padding: 6px 0;
  width: 100%;
  max-height: 60px;
  position: fixed;
  left: 60px;
  bottom: 0;
  font-family: "Roboto";
  font-size: 10px;
  text-align: center;
}
.footer p {
  display: inline-block;
  width: 33%;
  margin: 0;
}
.hide {
  display: none;
}
</style>