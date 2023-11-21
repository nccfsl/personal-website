export const classname = (names: (string | undefined | boolean)[]) =>
  names.filter((name) => !!name).join(" ");

/**
 * @description Concantenates multiple CSS classes in a string of a given CSSModule
 * @param styles CSSModule
 * @param classes The classes you want to add
 * @returns String containing all the CSS classes concatenated together
 *
 * @author Federico Chilese
 */
export const classNames = (
  styles: CSSModuleClasses,
  ...classes: (string | undefined | boolean)[]
) => {
  return classes
    .map((className) => styles[className as string] || className)
    .join(" ");
};

/**
 * @description HOC function that generates a BEM syntax concatenation function
 * @param styles CSSModule
 * @param prefix The prefix to use
 * @returns String containing all the CSS classes concatenated together in BEM syntax with the given prefix
 *
 * @author Federico Chilese
 */
export const createBem = (styles: CSSModuleClasses, prefix: string) => {
  return (...classes: (string | undefined | boolean)[]) => {
    return classNames(
      styles,
      ...classes
        .filter((className) => {
          return (
            (!!className || className === "") && typeof className === "string"
          );
        })
        .map((className) => `${prefix}${className}`)
    );
  };
};
