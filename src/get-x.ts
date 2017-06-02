export const getX = (element: HTMLElement): number => {    
    const computedStyle = window.getComputedStyle(element, null);
    let transform = computedStyle.getPropertyValue("transform");
    if (transform === "none") return 0;
    return JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"))[4];
}