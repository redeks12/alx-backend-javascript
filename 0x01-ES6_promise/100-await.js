import { uploadPhoto, createUser } from "./utils.js";
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { user, photo };
  } catch (e) {
    return { photo: null, user: null };
  }
}
