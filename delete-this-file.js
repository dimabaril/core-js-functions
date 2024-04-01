/**
 * Returns the logging wrapper for the specified method,
 * Logger has to log the start and end of calling the specified function.
 * Logger has to log the arguments of invoked function.
 * The format of output log is:
 * <function name>(<arg1>, <arg2>,...,<argN>) starts
 * <function name>(<arg1>, <arg2>,...,<argN>) ends
 *
 *
 * @param {Function} func
 * @param {Function} logFunc - function to output log with single string argument
 * @return {Function}
 *
 * @example
 *
 * const cosLogger = logger(Math.cos, console.log);
 * const result = cosLogger(Math.PI));     // -1
 *
 * log from console.log:
 * cos(3.141592653589793) starts
 * cos(3.141592653589793) ends
 *
 */
function logger(func, logFunc) {
  return (...args) => {
    const argsString = args.map((arg) => JSON.stringify(arg)).join(',');
    logFunc(`${func.name}(${argsString}) starts`);
    const result = func(...args);
    logFunc(`${func.name}(${argsString}) ends`);
    return result;
  };
}

const cosLogger = logger(Math.cos, console.log);
const result = cosLogger(Math.PI); // -1
console.log(result);

// log from console.log:
// cos(3.141592653589793) starts
// cos(3.141592653589793) ends
