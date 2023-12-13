const ApiPhoneList = fetch("https://api.tablebackend.com/v1/rows/KD1yMTD293Ai");
const ApiIphone = fetch("https://api.tablebackend.com/v1/rows/EzeW7gF0qGgX");
const ApiSamSung = fetch("https://api.tablebackend.com/v1/rows/jxL1n2QP2vkd");
const ApiOppo = fetch("https://api.tablebackend.com/v1/rows/FSUrcI3e8q5u");
const ApiPhone = {
  ApiPhoneList,
  ApiIphone,
  ApiSamSung,
  ApiOppo,
};
export default ApiPhone;
