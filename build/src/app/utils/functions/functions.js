// 1. Get a bunch of arguments
// 2. Make into array like var
// 3. compute each argument to a result or an empty string
// 4. Join the newly mapped arguments

const computeStyle = style => style ? style : '';
export const getstyles = (...args) => {
    return args.map(computeStyle).reduce((prev, cur) => `${prev} ${cur}` , '')
}
