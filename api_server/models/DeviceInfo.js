const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var deviceInfoSchema = new Schema({
  devID: String,
  current1: binary,
  current2: binary,
  dynamo_status: binary,
  relay_warning1: binary,
  relay_warning2: binary,
  status1: binary,
  status2: binary,
  temperature: binary,
  temperature_warning: binary,
  voltage1: binary,
  voltage2: binary,
  wifi_status: binary,
});

const DeviceInfo = mongoose.model("DeviceInfo", deviceInfoSchema);

module.exports = DeviceInfo;
