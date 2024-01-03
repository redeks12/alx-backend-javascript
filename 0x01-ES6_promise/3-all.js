import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((x) => console.log(`${x[0].body} ${x[1].firstName} ${x[1].lastName}`))
    .catch(() => console.log("Signup system offline"));
}
