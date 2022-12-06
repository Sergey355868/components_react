function  isEmptyObject(obj:({ [key:string]: unknown })):boolean {
    return Object.keys(obj).length === 0;
}
export function getClassesFromObj(
    obj:{ [key:string] : number |boolean | string | ({ [key:string] : boolean | string | number}) }
):string {
    let classes = "";
    let entries = Object.entries(obj);
    if(entries.length) {
        for (let [key, value] of entries) {
            if (typeof value === "string") {
                if (Boolean(value) && key !== "undefined") {
                    classes += key + " ";
                }
                continue;
            }
            if (typeof value === "boolean") {
                if (value && key !== "undefined") {
                    classes += key + " ";
                }
                continue;
            }
            if (typeof  value === "number") {
                if(Boolean(value) && key !== "undefined") {
                    classes += key + " ";
                }
                continue;
            }
            if (typeof value === "object") {
                if (value !== null && key !== "undefined") {
                    classes += getClassesFromObj(value);
                }
            }
        }
    }
    return  classes;
}
export function __getClassesString<T>(...arg:T[]):string {
    return arg.filter(Boolean).filter((val) => typeof val ==="string" ).join(" ");
 }
function _reduce <T,V> (arr:T[], accum:V,callback:(accum:V,el:T,index: number, arr:T[]) => V,index= 0):V {
    if(!arr.length) {
        return accum;
    }
    accum = callback(accum,arr[index],index,arr);
    return  (index < arr.length - 1) ? _reduce(arr,accum, callback,++index) : accum;
}
function _getClasses <T>(...arg:T[]):string {
    return arg.reduce((accum, el) => {
        if(typeof el  === "string") {
            if(Boolean(el)) {
                accum += el.trim() + " ";
            }
        }
        return accum;
    },"");
}
export  function getClassesString<T>(...arg:T[]):string {
    return _reduce(arg,"",(accum,el) => {
        if (typeof el  === "string") {
            if(Boolean(el)) {
                accum += el.trim() + " ";
            }
        }
        return accum;
    });
}
export function shallowClone<T>(object:{[key:string]:T }) {
    const cloned: { [key:string]: T } = {} ;
    for (const key in object) {
        if (object.hasOwnProperty(key)){
            cloned[key] = object[key];
        }
    }
    return cloned;
}
export function reverseArray<T>(arr:T[]):T[] {
    if(!arr.length) {
        return  arr;
    }
    for (let start = 0, end = arr.length -1; start < arr.length ; start++,end--) {
       if( end === start) {
           break;
       }
       let save = arr[start];
       arr[start] = arr[end];
       arr[end] = save;
       if(end - start  === 1) {
            break;
       }
    }
    return  arr;
}
export function _reverseArray<T>(arr:T[],start = 0,end = arr.length - 1):T[] {
    if (!arr.length) {
        return arr;
    }
    if (start === end) {
        return  arr;
    }
    let save = arr[start];
    arr[start] = arr[end];
    arr[end] = save;
    return  end - start === 1 ? arr : _reverseArray(arr, ++start, --end);
}