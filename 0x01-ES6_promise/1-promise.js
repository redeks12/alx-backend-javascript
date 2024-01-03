export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: "Success" });
    else reject(new Error("The fake API is not working currently"));
  });
  //   if (success) return Promise.resolve({ status: 200, body: "Success" });
  //   else
  //     return Promise.reject(new Error("The fake API is not working currently"));

  return promise;
}
