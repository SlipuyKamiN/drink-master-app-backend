// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

//const nameRegexp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"

export const passwordRegexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{6,16}$";

export default {
  emailRegexp,
  passwordRegexp,
};
