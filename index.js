const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batterBatches.reduce(function(total, batch) {
  return batch + total}, 0);
