module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  
  const itemSucceeds = {
    name: item.name,
    durability: item.durability,
    enhancement: item.enhancement === 20 ? item.enhancement = item.enhancement : item.enhancement += 1
  }
  
  return itemSucceeds;
}

function fail(item) {
  
  if (item.enhancement < 15) {
    return ({ ...item, durability: item.durability -= 5 });
  }
  else if (item.enhancement >= 15 && item.enhancement <= 16) {
    return ({ ...item, durability: item.durability -= 10 });
  }
  else {
    return ({ ...item, enhancement: item.enhancement -= 1 });
  }
}

function repair(item) {

  const itemRepair = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  }
  
  return itemRepair;
}

function get(item) {
  return { ...item };
}
