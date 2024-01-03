import { uploadPhoto, createUser } from "utils.js";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((x) => console.log(x[0].body, x[1].firstName, x[1].lastName))
    .catch(() => console.log("Signup system offline"));
}
