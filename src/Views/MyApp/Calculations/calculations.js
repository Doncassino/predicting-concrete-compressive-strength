import * as tf from '@tensorflow/tfjs';

const mean = [ 281.167864, 73.895825, 54.188350, 181.567282, 6.204660, 972.918932, 773.580485, 45.662136];
    const std = [ 104.506364, 86.279342, 63.997004, 21.354219, 5.973841, 77.753954, 80.175980, 63.169912 ];

const calculationFunctions = {
  predicitions: async (inputs) => {
    const {
      cement,
      furnace_slag,
      fly_ash,
      water,
      super_plasticizer,
      coarse_agg,
      fine_agg,
      age
    } = inputs;

    let inputsArray = [];
    inputsArray.push([
      cement.value,
      furnace_slag.value,
      fly_ash.value,
      water.value,
      super_plasticizer.value,
      coarse_agg.value,
      fine_agg.value,
      age.value
    ]);

    const inputsArrayNorm = await inputsArray.map(line => {
      return line.map((item, i) => {
        return (item - mean[i]) / std[i];
      })
    })

    console.log(inputsArrayNorm);
    const inputsTensor = tf.tensor(inputsArrayNorm);

    //let inputsTensorNorm = inputsTensor.norm


    const pathModel = `/Models/model_predicting_concrete_compressive_strength/model.json`;
    const model = await tf.loadLayersModel(pathModel);

    console.log('shape:',  inputsTensor.shape);
    let fck = await Array.from(model.predict(inputsTensor).dataSync())[0] || "";
    console.log(Number(fck))

    return fck;
  },
  predicitionsStressEvolution: async (inputs) => {
    const {
      cement,
      furnace_slag,
      fly_ash,
      water,
      super_plasticizer,
      coarse_agg,
      fine_agg,
      age
    } = inputs;

    const pathModel = `/Models/model_predicting_concrete_compressive_strength/model.json`;
    const model = await tf.loadLayersModel(pathModel);

    let inputsArray = [];
    for(let i = 0; i < 20; i++) {
      inputsArray.push([
        cement.value,
        furnace_slag.value,
        fly_ash.value,
        water.value,
        super_plasticizer.value,
        coarse_agg.value,
        fine_agg.value,
        i * 20
      ]);
    }

    const inputsArrayNorm = await inputsArray.map(line => {
      return line.map((item, i) => {
        return (item - mean[i]) / std[i];
      })
    })


    const inputsTensor = tf.tensor(inputsArrayNorm);
    const fck = await Array.from(model.predict(inputsTensor).dataSync()) || "";
    
    let predictedArray = [];
    let theoricalArray = [];
  
    for(let i = 0; i < 20; i++) {
      predictedArray.push({ x: i * 20, y: fck[i]});
      theoricalArray.push({ x: i * 20, y: 79.99});
    }

    const outputArray = [predictedArray, theoricalArray];
    console.log(outputArray);

    return predictedArray;
  }
}

export default calculationFunctions;