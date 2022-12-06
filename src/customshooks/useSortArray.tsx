import React, { useMemo } from 'react';

export function useSortArray<T, B extends keyof T > (array:Array<T>,register?:boolean, key?:B):T[][] {
    let asc = useMemo(() => {
        return [...array].sort((a,b) => {
            if (key) {
              return  getNumberForSortAsk(a[key],b[key],register);
            } else {
              return getNumberForSortAsk(a,b, register);
            }
        });
    },[array, key, register]);
    let desc = useMemo(() => {
        return [...array].sort((a,b) => {
            if(key) {
                return  getNumberForSortDesk(a[key],b[key],register);
            } else {
                return getNumberForSortDesk(a,b, register);
            }
        });
    },[array, key, register]);
   return [asc, desc];
}
function getNumberForSortAsk<T>(a:T,b:T,register = false): number {
    if (typeof a === "string" && typeof b === "string") {
        return  register ? a.localeCompare(b) : a.toLowerCase().localeCompare(b.toLowerCase());
    } else if (typeof  a ==="number" &&  typeof b === "number" ) {
        return a - b;
    } else {
        return  0;
    }
}
function getNumberForSortDesk<T>(a:T,b:T,register = false):number {
    if(typeof a ==="string" && typeof  b === "string") {
        return register
            ? a.localeCompare(b) === 1 ? -1 : 1
            : a.toLowerCase().localeCompare(b.toLocaleLowerCase()) === 1 ? -1 : 1;
    }
    if (typeof a === "number" && typeof b ==="number") {
        return  (a -b) > 0 ? -1 : 1;
    }
    else {
        return  0
    }
}

