export const fetchRockets = async () => {
  try {
    const response = await fetch("https://api.spacexdata.com/v3/rockets");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching rockets:", error);
    return [];
  }
};
