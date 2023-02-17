import * as wasm from "wasm"


export function test_wasm() {
    let send = wasm.send_example_to_js();

    console.log(send);

    console.log("-----");

    let field = new Map();
    field.set(0, "my name is jon");
    let read = {
        field1: field,
        field2: [[], []],
        field3: [21, 31, 3, 1232],
    };

    let receive = wasm.receive_example_from_js(read);
    console.log(receive);

}