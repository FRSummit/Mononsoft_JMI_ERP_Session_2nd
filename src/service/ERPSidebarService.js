import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = 'http://192.168.10.74:3000';
// axios.defaults.baseURL = 'http://203.188.246.138:8885/jerp_data.php';
// axios.defaults.baseURL = 'http://203.188.246.138:8885/input.json';
// axios.defaults.baseURL = 'http://203.188.246.138:8885/jerp_vuejs_sidebar.php';
// axios.defaults.baseURL = 'http://192.168.10.34:8080/MS/api';
axios.defaults.baseURL = 'http://192.168.10.34:3001';
// axios.defaults.baseURL = 'http://192.168.10.34:8080/PhpApi/api/category/read.php';
// axios.defaults.baseURL = 'http://203.188.246.138:8885/jerp/public/demodata';

export default class PostService {
  getAllSidebarMenu() {
    return axios.get('/jerp_menu');
  }

  getAllCompanyList() {
    return axios.get('/company_list');
  }

  getAllChatList() {
    return axios.get('/chat');
  }

  getAllNoificationList() {
    return axios.get('/noification');
  }

  getAllUser() {
    return axios.get('/user');
  }

  getUsersList() {
    return axios.get('/users');
  }

  getLoginRequestUserData(username, password) {
    return axios.get(`/users?username=${username}&password=${password}`);
  }

  getPassengersList(itemsPerPage, pageNumber) {
    console.log(itemsPerPage + '    ' + pageNumber)
    return axios.get('/passengers_list');
    // return axios.get("https://api.instantwebtools.net/v1/passenger?size=" +
    //                   itemsPerPage + "&page=" + pageNumber);
    // const url = new URL("http://localhost:3001");
    // return axios({
    //   url: url,
    //   method: "GET"
    // });
  }

  getCompetitorsDataMgt() {
    return axios.get('/competitors_data');
  }

  getSBUData() {
    return axios.get('/sub_data');
  }

  getSBUSisterConcernData() {
    return axios.get('/sister_concern_data');
  }
}


/**
 *
 *
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$file = file_get_contents("input.json");
echo ($file);

?>



input file

[
{
    "primary_menu": "Setting & Management - Setting & Management",
    "secondary_menu_list": [
      {
        "secondary_menu": "Product Management",
        "left_icon": "./Icons/Group 1383.svg",
        "tertiary_menu_list": [
          {
            "tertiary_menu": "Product Management",
            "left_icon": "./Icons/Group 1383.svg"
          },
          {
            "tertiary_menu": "Product Management",
            "left_icon": "./Icons/Group 1383.svg"
          },
          {
            "tertiary_menu": "Product Management",
            "left_icon": "./Icons/Group 1383.svg"
          }
        ]
      }
    .............
]

 */



