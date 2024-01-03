import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  const vals = [];
  //    Promise.all([
  //     signUpUser(firstName, lastName),
  //     uploadPhoto(fileName),
  //   ]).then(
  //     (x) => console.log(x),
  //     (x) => x
  //   );

  const bb = signUpUser(firstName, lastName).then((x) => vals.push(x));
  console.log(bb);
  return vals;
}
