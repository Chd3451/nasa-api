const apiKey = "hc9jPJhbgPEVmVl8wC79XaZ2o1Mg9DVcR2K1CEAA";
const apiURL = "https://api.nasa.gov/planetary/apod";

export default async (urlParams?: string) => {
  try {
    const response = await fetch(
      `${apiURL}?api_key=${apiKey}${
        typeof urlParams !== "undefined" && urlParams?.length > 0
          ? urlParams
          : ""
      }`
    );
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
