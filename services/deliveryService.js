const productAvailability = {
    'C1': ['A', 'B', 'C'],
    'C2': ['D', 'E', 'F'],
    'C3': ['G', 'H', 'I']
  };
  
  const distances = {
    'C1-C2': 30,
    'C1-C3': 40,
    'C1-L1': 10,
    'C2-C3': 20,
    'C2-L1': 35,
    'C3-L1': 25
  };
  
  const vehicleCost = {
    'light': 4,
    'medium': 5,
    'heavy': 6
  };
  
  function getDistance(loc1, loc2) {
    if (loc1 === loc2) return 0;
    return distances[`${loc1}-${loc2}`] || distances[`${loc2}-${loc1}`];
  }
  
  function calculateOrderWeight(order) {
    let weight = 0;
    for (const item in order) {
      weight += order[item] * 0.5;
    }
    return weight;
  }
  
  function getCostPerKm(weight) {
    if (weight <= 5) return vehicleCost.light;
    if (weight <= 10) return vehicleCost.medium;
    return vehicleCost.heavy;
  }
  
  function getCentersForOrder(order) {
    const centers = new Set();
    for (const product in order) {
      if (order[product] > 0) {
        for (const center in productAvailability) {
          if (productAvailability[center].includes(product)) {
            centers.add(center);
          }
        }
      }
    }
    return Array.from(centers);
  }
  
  function getPermutations(arr) {
    if (arr.length <= 1) return [arr];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
      const perms = getPermutations(remaining);
      for (const perm of perms) {
        result.push([current, ...perm]);
      }
    }
    return result;
  }
  
  function calculateRouteCost(route, weight) {
    const costPerKm = getCostPerKm(weight);
    let distance = 0;
    for (let i = 0; i < route.length - 1; i++) {
      distance += getDistance(route[i], route[i + 1]);
    }
    return distance * costPerKm;
  }
  
  exports.calculateMinimumDeliveryCost = (order) => {
    const weight = calculateOrderWeight(order);
    const centers = getCentersForOrder(order);
  
    if (centers.length === 1) {
      return calculateRouteCost([centers[0], 'L1'], weight);
    }
  
    let minCost = Infinity;
  
    for (const start of centers) {
      const others = centers.filter(c => c !== start);
      const permutations = getPermutations(others);
  
      for (const perm of permutations) {
        const route = [start];
        for (const center of perm) {
          route.push(center);
          route.push('L1');
        }
        if (route[route.length - 1] !== 'L1') {
          route.push('L1');
        }
        const cost = calculateRouteCost(route, weight);
        minCost = Math.min(minCost, cost);
      }
    }
  
    return Math.round(minCost);
  };
  