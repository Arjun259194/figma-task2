import axios from "axios";

//TODO: Not used right not but can be used to fetch country flag png for the cards in riverCards component
// Define the base URL and parameters
const baseUrl = "https://restcountries.com/v3.1/name/France";
const params = {
  fullText: true, // Ensures an exact match for the country name
  fields: "name,flags", // Filters the response to only include these fields
};

export async function getFranceData() {
  try {
    const response = await axios.get(baseUrl, { params });

    // The REST Countries API returns an array, even for a single result
    const franceData = response.data[0];

    console.log("Country Data:", franceData);
    console.log("Full Name:", franceData.name.official);
    console.log("Flag PNG URL:", franceData.flags.png);

    // You can return the data or process it further
    return franceData;
  } catch (error) {
    console.error("Error fetching country data:", error.message);
    // You might want to throw the error to be handled by the caller
    // throw error;
  }
}
