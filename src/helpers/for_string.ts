export function fromCamelCasetoDash(objClasses: { [key:string] : string }, classCSS:string):string {
    let key = classCSS.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
    return  objClasses[key];
}
