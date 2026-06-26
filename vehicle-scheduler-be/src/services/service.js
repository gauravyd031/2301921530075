const api = require("../config/axios");
const Log = require("../utils/logger");
const solveKnapsack = require("./knapsack.service");

const getDepots = async () => {
  await Log("backend", "info", "service", "Fetching depots");

  const response = await api.get("/depots");

  return response.data;
};

const getVehicles = async () => {
  await Log("backend", "info", "service", "Fetching vehicles");

  const response = await api.get("/vehicles");

  return response.data;
};

const generateSchedule = async () => {
  const depots = (await getDepots()).depots;
  const vehicles = (await getVehicles()).vehicles;
  const result = [];

  for (const depot of depots) {
    const bestSchedule = solveKnapsack(
      vehicles,
      depot.MechanicHours
    );

    result.push({
      depotId: depot.ID,
      mechanicHours: depot.MechanicHours,
      totalImpact: bestSchedule.totalImpact,
      selectedTasks: bestSchedule.selectedTasks,
    });
  }
  return result;
};

module.exports = {
  getDepots,
  getVehicles,
  generateSchedule
};