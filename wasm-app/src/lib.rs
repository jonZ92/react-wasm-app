use std::collections::HashMap;

use serde::{Deserialize, Serialize};
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};


#[derive(Serialize, Deserialize, Debug)]
pub struct Example {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,

    pub field3: [f32; 4],
}

#[wasm_bindgen]
pub fn send_example_to_js() -> Result<JsValue, JsValue> {
    let mut field1 = HashMap::new();
    field1.insert(0, String::from("ex"));

    let example = Example {
        field1,
        field2: vec![vec![1., 2.], vec![3., 4.]],
        field3: [1., 2., 3., 4.],
    };

    Ok(serde_wasm_bindgen::to_value(&example)?)
}

#[wasm_bindgen]
pub fn receive_example_from_js(val: JsValue) -> Result<JsValue, JsValue> {
    let _example: Example = serde_wasm_bindgen::from_value(val)?;

    Ok(serde_wasm_bindgen::to_value(&_example)?)
}

