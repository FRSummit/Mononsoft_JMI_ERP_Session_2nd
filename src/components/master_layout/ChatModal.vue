<template>
  <div id="chat-modal" class="chat-modal hide">
    <div class="chat-modal-triangle-sec">
      <img
        src="../../assets/icons/triangle.svg"
        alt="chat-tri"
        class="chat-tri-icon"
      />
    </div>
    <div class="chat-inner-sec">
      <p class="chat-txt">Messages</p>
      <div id="chat-progressbar" class="chat-progressbar" v-if="progress">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
      <div class="chat-modal-inner">
        <a
          href="www.google.com"
          class="chat"
          v-for="(chat, i) in chat"
          :key="i"
        >
          <img
            src="../../assets/icons/user.png"
            alt="user-icon"
            class="chat-icon"
          />
          <div class="chat-title-desc">
            <p class="chat-title">{{ chat.title }}</p>
            <p class="chat-description">{{ chat.description }}</p>
          </div>
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
      chat: [],
      progress: true,
    };
  },
  created() {
    service.getAllChatList().then((res) => {
      this.chat = res.data;
      this.progress = false;
    });
  },
};
</script>

<style scoped>
.chat-modal {
  position: absolute;
}
.chat-tri-icon {
  width: 16px;
  display: block;
  margin-left: 0;
  cursor: pointer;
}
.chat-inner-sec {
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
.chat-inner-sec::-webkit-scrollbar {
  width: 4px;
}
.chat-inner-sec::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
.chat-inner-sec::-webkit-scrollbar-thumb {
  background: #45a5ff;
  border-radius: 10px;
}
.chat-inner-sec::-webkit-scrollbar-thumb:hover {
  background: #006ace;
}
.chat-txt {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 4px 40px;
}
.chat-progressbar {
    text-align: center;
    margin: 20px 0;
    color: #026cd1;
}
.chat {
  padding: 6px 30px;
  margin: 6px 0;
  padding-right: 20px;
  display: block;
  text-decoration: none;
  color: #222222;
}
.chat-icon {
  display: inline-block;
  vertical-align: top;
  width: 30px !important;
  border-radius: 20px;
  border: 2px solid #00000000;
}
.chat-title-desc {
  display: inline-block;
  width: 290px;
  overflow: hidden;
}
.chat-title {
  margin: 0;
  font-size: 14px;
  color: #026cd1;
  font-weight: bold;
}
.chat-description {
  margin: 4px 0 0;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
</style>