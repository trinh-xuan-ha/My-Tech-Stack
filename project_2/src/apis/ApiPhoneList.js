const ApiPhoneList = fetch("https://api.tablebackend.com/v1/rows/KD1yMTD293Ai");
const ApiIphone = fetch("https://api.tablebackend.com/v1/rows/EzeW7gF0qGgX");
const ApiSamSung = fetch("https://api.tablebackend.com/v1/rows/jxL1n2QP2vkd");
const ApiOppo = fetch("https://api.tablebackend.com/v1/rows/FSUrcI3e8q5u");

const create = (newApiPhoneList) => {
  return fetch("https://api.tablebackend.com/v1/rows/KD1yMTD293Ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newApiPhoneList),
  });
};

const ApiPhone = {
  ApiPhoneList,
  create,
};

export default ApiPhone;
