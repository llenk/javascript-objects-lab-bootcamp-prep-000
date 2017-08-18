var recipes = new Objects({flour: "8 cups"};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {key: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

