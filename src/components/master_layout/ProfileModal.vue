<template>
  <div id="profile-modal" class="profile-modal hide">
    <div class="profile-modal-triangle-sec">
      <img
        src="../../assets/icons/triangle.svg"
        alt="profile-tri"
        class="profile-tri-icon"
      />
    </div>
    <div class="profile-modal-inner">
      <div class="profile-img-title-designation">
        <img
          class="profile-img"
          src="../../assets/icons/user.png"
          alt="F R Summit"
        />
        <p class="profile-title">{{ user.name }}</p>
        <p class="profile-designation">{{ user.designation }}</p>
      </div>
      <div class="profile-role-section">
        <p class="profile-modal-role-text">View As</p>
        <p class="profile-role-role" v-for="(role, i) in user.role" :key="i">
          {{ role.role }}
        </p>
      </div>
      <div class="profile-my-profile">
        <p class="profile-my-profile-text">My Profile</p>
        <div>
          <a class="profile-view" href="https://www.google.com">View Profile</a>
        </div>
        <div>
          <a class="profile-pass-change" href="https://www.google.com"
            >Change Password</a
          >
        </div>
      </div>
      <p class="profile_logout">
        <router-link to="/login">Logout</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import ERPSidebarService from "../../service/ERPSidebarService";
const service = new ERPSidebarService();
import { mapState } from "vuex";

export default {
  data() {
    return {
      user: {
        name: "F R Summit",
        designation: "Sr. Software Engineer",
        role: [
          {
            role: "Admin",
          },
          {
            role: "Developer",
          },
          {
            role: "User",
          },
        ],
      },
      progress: true,
    };
  },
  computed: {
    ...mapState({
      account: (state) => state.account,
      users: (state) => state.users.all,
    }),
  },
  created() {
    service.getAllUser().then((res) => {
      this.user = res.data[0];
      this.progress = false;
    });
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
.profile-tri-icon {
  position: absolute;
  top: 44px;
  width: 16px;
  display: block;
  margin-left: 8px;
  cursor: pointer;
}
.profile-modal-inner {
  position: absolute;
  background: #ffffff;
  right: 10px;
  top: 66px;
  width: 300px;
  z-index: 5;
  font-family: "Roboto";
  box-shadow: 0px 0px 22px -6px #026cd1;
  padding-top: 20px;
  padding-bottom: 30px;
}
.profile-img-title-designation {
  text-align: center;
}
.profile-img {
  width: 50px;
  border-radius: 50px;
}
.profile-title {
  font-size: 18px;
  color: #222222;
  font-weight: bold;
  margin: 0;
}
.profile-designation {
  font-size: 14px;
  color: #757575;
  margin: 0;
}
.profile-role-section {
  padding: 0 40px;
  margin-top: 20px;
}
.profile-modal-role-text {
  font-size: 14px;
  font-weight: bold;
  color: #222222;
  margin: 0;
  margin-bottom: 6px;
}
.profile-role-role {
  font-size: 16px;
  color: #555555;
  margin: 0;
  padding: 2px 0 2px 10px;
  cursor: pointer;
}
.profile-my-profile {
  padding: 0 40px;
  margin-top: 20px;
}
.profile-my-profile-text {
  font-size: 14px;
  font-weight: bold;
  color: #222222;
  margin: 0;
  margin-bottom: 6px;
}
.profile-my-profile div {
  margin: 6px 0;
}
.profile-my-profile div a {
  font-size: 16px;
  color: #555555;
  margin: 0;
  padding: 2px 0 2px 10px;
  cursor: pointer;
  text-decoration: none;
}
.profile_logout {
  font-size: 16px;
  color: #222222;
  margin: 20px 0 0;
  margin-bottom: 6px;
  cursor: pointer;
  text-align: center;
}
.profile_logout a {
  text-decoration: none;
  color: #222222;
}
</style>