import { Foo, jsthunk } from '../globals.js';
import * as __wbg_star0 from '../globals.js';

let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
* @param {number} n
*/
export function call_js_thunk_n_times(n) {
    wasm.call_js_thunk_n_times(n);
}

/**
* @param {number} n
* @param {number} a
* @param {number} b
*/
export function call_js_add_n_times(n, a, b) {
    wasm.call_js_add_n_times(n, a, b);
}

/**
*/
export function thunk() {
    wasm.thunk();
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a, b) {
    const ret = wasm.add(a, b);
    return ret;
}

/**
* @param {number} n
* @returns {number}
*/
export function fibonacci(n) {
    const ret = wasm.fibonacci(n);
    return ret;
}

/**
* @returns {number}
*/
export function fibonacci_high() {
    const ret = wasm.fibonacci_high();
    return ret;
}

let stack_pointer = 128;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
/**
* @param {number} n
* @param {any} js_foo
*/
export function call_foo_bar_final_n_times(n, js_foo) {
    try {
        wasm.call_foo_bar_final_n_times(n, addBorrowedObject(js_foo));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
* @param {number} n
* @param {any} js_foo
*/
export function call_foo_bar_structural_n_times(n, js_foo) {
    try {
        wasm.call_foo_bar_structural_n_times(n, addBorrowedObject(js_foo));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
* @param {number} n
*/
export function call_doesnt_throw_n_times(n) {
    wasm.call_doesnt_throw_n_times(n);
}

/**
* @param {number} n
*/
export function call_doesnt_throw_with_catch_n_times(n) {
    wasm.call_doesnt_throw_with_catch_n_times(n);
}

function GetOwnOrInheritedPropertyDescriptor(obj, id) {
    while (obj) {
        let desc = Object.getOwnPropertyDescriptor(obj, id);
        if (desc) return desc;
        obj = Object.getPrototypeOf(obj);
    }
    return {};
}
/**
* @param {number} n
* @param {any} element
*/
export function call_first_child_final_n_times(n, element) {
    try {
        wasm.call_first_child_final_n_times(n, addBorrowedObject(element));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
* @param {number} n
* @param {any} element
*/
export function call_first_child_structural_n_times(n, element) {
    try {
        wasm.call_first_child_structural_n_times(n, addBorrowedObject(element));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}
/**
* @param {number} n
* @param {any[]} elements
*/
export function call_node_first_child_n_times(n, elements) {
    const ptr0 = passArrayJsValueToWasm0(elements, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.call_node_first_child_n_times(n, ptr0, len0);
}

/**
* @param {number} n
* @param {any[]} elements
*/
export function call_node_node_type_n_times(n, elements) {
    const ptr0 = passArrayJsValueToWasm0(elements, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.call_node_node_type_n_times(n, ptr0, len0);
}

/**
* @param {number} n
* @param {any[]} elements
*/
export function call_node_has_child_nodes_n_times(n, elements) {
    const ptr0 = passArrayJsValueToWasm0(elements, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.call_node_has_child_nodes_n_times(n, ptr0, len0);
}

/**
* @param {Node} element
*/
export function count_node_types(element) {
    wasm.count_node_types(addHeapObject(element));
}

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}
/**
* @param {string} s
* @returns {string}
*/
export function str_roundtrip(s) {
    let deferred2_0;
    let deferred2_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(s, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.str_roundtrip(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred2_0 = r0;
        deferred2_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_bar_14315dfd5827235f = function(arg0) {
        Foo.prototype.bar.call(getObject(arg0));
    };
    imports.wbg.__wbg_bar_fe55e800dd415e46 = function(arg0) {
        getObject(arg0).bar();
    };
    imports.wbg.__wbg_jsthunk_da16975e38589ab0 = function() { return handleError(function () {
        jsthunk();
    }, arguments) };
    imports.wbg.__wbg_firstChild_d3a3fe6b23b53506 = function(arg0) {
        const ret = GetOwnOrInheritedPropertyDescriptor(Element.prototype, 'firstChild').get.call(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_firstChild_17d5ee6c68ae5894 = function(arg0) {
        const ret = getObject(arg0).firstChild;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_nodeType_238f049908daf027 = function(arg0) {
        const ret = getObject(arg0).nodeType;
        return ret;
    };
    imports.wbg.__wbg_firstChild_08ce7a229cc70a39 = function(arg0) {
        const ret = getObject(arg0).firstChild;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_nextSibling_304d9aac7c2774ae = function(arg0) {
        const ret = getObject(arg0).nextSibling;
        return isLikeNone(ret) ? 0 : addHeapObject(ret);
    };
    imports.wbg.__wbg_hasChildNodes_74094304b4c44ff3 = function(arg0) {
        const ret = getObject(arg0).hasChildNodes();
        return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_rethrow = function(arg0) {
        throw takeObject(arg0);
    };
    imports['../globals.js'] = __wbg_star0;

    return imports;
}

function __wbg_init_memory(imports, maybe_memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedInt32Memory0 = null;
    cachedUint32Memory0 = null;
    cachedUint8Memory0 = null;


    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(input) {
    if (wasm !== undefined) return wasm;

    if (typeof input === 'undefined') {
        input = new URL('wasm_bindgen_benchmark_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await input, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync }
export default __wbg_init;