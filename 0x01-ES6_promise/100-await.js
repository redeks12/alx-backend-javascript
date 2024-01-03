import { isNull } from "lodash";
import { uploadPhoto, createUser } from "./utils.js";
export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();

  const ddb = { user, photo };
  if (!user) {
    ddb["user"] = null;
  } else if (!photo) {
    ddb["photo"] = null;
  }
  return ddb;
}
