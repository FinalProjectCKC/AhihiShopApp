import { userData } from '../../../../config/settings';
import { API_URL } from '../../../../config/linkApi';
const errorServerFail = 'Không kết nối được với máy chủ';

export function getUserDataApi() {
  return fetch(API_URL.getUserData, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    // body: JSON.stringify({
    //   page: input.page,
    //   limit: input.limit,
    // }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return { status: -1, message: errorServerFail };
    });
}
export function updateUserApi(input) {
  console.log("Ré", input)

  return fetch(API_URL.updateUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      fullName: input.fullName,
      // email: input.email,
      phone: input.phone,
      address: input.address,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return { status: -1, message: errorServerFail };
    });
}
export function changePassApi(input) {
  console.log("response ", input)

  return fetch(API_URL.changePass, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      newpass: input.newpass,
      password: input.password,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return { status: -1, message: errorServerFail };
    });
}