export var CONDITIONS_FUNCTIONS = { // search method base on conditions list value
  "IsNull": function (value, filterdValue) {
    return value === "";
  },
  "IsNotNull": function (value, filterdValue) {
    return value !== "";
  },
  "eq": function (value, filterdValue) {
    if(typeof (value) =="string"){
      return value.toLowerCase() == filterdValue.toLowerCase();
    }
    else{
      return value == filterdValue
    }
  },
  "ne": function (value, filterdValue) {
    if(typeof (value) =="string"){
      return value.toLowerCase() != filterdValue.toLowerCase();
    }
    else{
      return value != filterdValue
    }
  },
  "Like": function (value, filterdValue) {
    if (value.toLowerCase().indexOf(filterdValue.toLowerCase()) != -1) {
      return true;
    }
      return false;
  },
  "InList": function (value, filterdValue) {
    var allValues = filterdValue.toLowerCase().split(",");
    for (var i = 0; i < allValues.length; i++) {
      if (value.toLowerCase().indexOf(allValues[i]) != -1) {
        return true;
      }
    }
    return false;
  },

  "gt": function (value, filterdValue) {
    if (value > filterdValue) {
      return true;
    }
    return false;
  },
  "lt": function (value, filterdValue) {
    if (value < filterdValue) {
      return true;
    }
    return false;
  },
  "ge": function (value, filterdValue) {
    if (value >= filterdValue) {
      return true;
    }
    return false;
  },
  "le": function (value, filterdValue) {
    if (value <= filterdValue) {
      return true;
    }
    return false;
  }
};