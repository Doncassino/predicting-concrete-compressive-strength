const initialData = {
  inputs: {
    cement: {
      name: 'cement',
      text: 'cement',
      value: 540,
      description: 'Cement (kg in a m3 mixture)',
      unit: 'kg/m3'
    },
    furnace_slag: {
      name: 'furnace_slag',
      text: 'furnace_slag',
      value: 0,
      description: 'Blast Furnace Slag (kg in a m3 mixture):',
      unit: 'kg/m3'
    },
    fly_ash: {
      name: 'fly_ash',
      text: 'flay_ash',
      value: 0,
      description: 'Fly Ash (kg in a m3 mixture):',
      unit: 'kg/m3'
    },
    water: {
      name: 'water',
      text: 'water',
      value: 162,
      description: 'Water (kg in a m3 mixture):',
      unit: 'kg/m3'
    },
    super_plasticizer: {
      name: 'super_plasticizer',
      text: 'super_plasticizer',
      value: 2.5,
      description: 'Super Plasticizer (kg in a m3 mixture):',
      unit: 'kg/m3'
    },
    coarse_agg: {
      name: 'coarse_agg',
      text: 'coarse_agg',
      value: 1040,
      description: 'Coarse Aggregate  (kg in a m^3 mixture):',
      unit: 'kg/m3'
    },
    fine_agg: {
      name: 'fine_agg',
      text: 'fine_agg',
      value: 676,
      description: 'Fine Aggregate (kg in a m^3 mixture):',
      unit: 'kg/m3'
    },
    age: {
      name: 'age',
      text: 'age',
      value: 28,
      description: 'Age (day):',
      unit: 'days'
    },
  },
  outputs: {
    compressive_strength: {
      name: 'compressive_strength',
      text: 'compressive_strength',
      value: 79.99,
      description: 'Concrete compressive strength(MPa, megapascals)',
      unit: 'MPa'
    }
  }  
}

export default initialData;
