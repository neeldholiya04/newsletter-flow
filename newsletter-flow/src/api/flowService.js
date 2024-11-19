import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/flow"; 

export const startFlow = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/start`);
    return response.data.logs;
  } catch (error) {
    console.error("Error starting flow:", error.message);
    throw error;
  }
};
