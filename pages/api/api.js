import axios from "axios";

export const fetchServices = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/services`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};

export const fetchPrices = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/prices`
    );

    // console.log("responce", responce);

    return response.data;
  } catch (error) {
    console.error("Error fetching prices:", error);
    throw error;
  }
};
