import { userData } from '../../../../config/settings';
import { API_URL } from '../../../../config/linkApi';
const errorServerFail = 'Không kết nối được với máy chủ';

export function getCartApi() {
  return fetch(API_URL.getCart, {
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
export function removeFormCartApi(input) {
  return fetch(API_URL.removeFromCart, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      productId: input.productId,
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
export function addToCartApi(input) {
  console.log("ahihi", input)
  return fetch(API_URL.addToCart, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      productId: input.productId,
      quan: input.quan,
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
export function editQuanApi(input) {
  return fetch(API_URL.editQuanTi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      productId: input.productId,
      quan: input.quan,
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
export function newOrderApi(input) {
  console.log("input", input)
  return fetch(API_URL.newOrder, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify({
      address: input.address,
      email: input.email,
      phone: input.phone,
      receiver: input.phone,
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