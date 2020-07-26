import { userData } from '../../../../config/settings';
import { API_URL } from '../../../../config/linkApi';
const errorServerFail = 'Không kết nối được với máy chủ';

export function loginApi(input) {
  return fetch(API_URL.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${userData.token}`,
    },
    body: JSON.stringify(input),
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