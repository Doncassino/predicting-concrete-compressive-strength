import * as tf from '@tensorflow/tfjs';

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


    const pathModel = `/Models/model_predicting_concrete_compressive_strength/model.json`;
    console.log(pathModel)
    const model = await tf.loadLayersModel(pathModel);
    console.log(model);
    const inputsTensor = tf.tensor2d([[
      cement.value,
      furnace_slag.value,
      fly_ash.value,
      water.value,
      super_plasticizer.value,
      coarse_agg.value,
      fine_agg.value,
      age.value
    ],
    [
      cement.value,
      furnace_slag.value,
      fly_ash.value,
      water.value,
      super_plasticizer.value,
      coarse_agg.value,
      fine_agg.value,
      age.value + 20
    ]]);
    console.log('shape:',  inputsTensor.shape);
    const fck = await Array.from(model.predict(inputsTensor).dataSync()) || "";
    console.log(fck)

    return fck;
  },
}

export default calculationFunctions;