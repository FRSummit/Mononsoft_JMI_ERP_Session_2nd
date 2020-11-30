import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.baseURL = 'http://192.168.10.74:3000';
// axios.defaults.baseURL = 'http://203.188.246.138:8885/jerp_data.php';
// axios.defaults.baseURL = 'http://203.188.246.138:8885/input.json';
// axios.defaults.baseURL = 'http://203.188.246.138:8885/jerp_vuejs_sidebar.php';
// axios.defaults.baseURL = 'http://192.168.10.34:8080/MS/api';
// axios.defaults.baseURL = 'http://192.168.10.34:3001';
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

  getLoginRequestUserData(username, password) {
    console.log('inside service provide : ' + username + '    ' + password)
    // return axios.get(`/users?username=${username}&password=${password}`);
    const url = new URL("http://203.188.246.138:8885/api/auth/login");
    let headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTBhNmMzMWYyN2FkYjU3ODFkNDlkYmFhMTZiZmY4ZGU1N2I2YTIyMWQ3NzA3MjExMjZhMjU1MWUxODIzMmI1NzMzYTJjNjM4NTA0MTQ0MDIiLCJpYXQiOjE2MDAzMzU3MDIsIm5iZiI6MTYwMDMzNTcwMiwiZXhwIjoxNjMxODcxNzAyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dNEln530pvlXF8vyQeTz7ApdbfIa3aINvYLMcd6fUKbIHSVF40t9jmib1L_jI4EfjF7tszOGHhlyICds0mZmIA",
      "X-Localization": "en",
    };
    let body = {
      "email": username,
      "password": password
    }
    console.log(body)
    return axios({
      url: url,
      method: 'POST',
      headers: headers,
      data: body
    });
  }

  getLogoutRequest() {
    const url = new URL("http://203.188.246.138:8885/api/logout");
    let headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTBhNmMzMWYyN2FkYjU3ODFkNDlkYmFhMTZiZmY4ZGU1N2I2YTIyMWQ3NzA3MjExMjZhMjU1MWUxODIzMmI1NzMzYTJjNjM4NTA0MTQ0MDIiLCJpYXQiOjE2MDAzMzU3MDIsIm5iZiI6MTYwMDMzNTcwMiwiZXhwIjoxNjMxODcxNzAyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dNEln530pvlXF8vyQeTz7ApdbfIa3aINvYLMcd6fUKbIHSVF40t9jmib1L_jI4EfjF7tszOGHhlyICds0mZmIA",
      "X-Localization": "en",
    };
    return axios({
      url: url,
      method: "GET",
      headers: headers
    });
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



