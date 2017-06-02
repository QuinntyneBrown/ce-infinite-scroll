export var transformY = (element: HTMLElement, y: number) => {
    element.style["-moz-transform"] = `translateY(${y}px)`;
    element.style["-webkit-transform"] = `translateY(${y}px)`;
    element.style["-ms-transform"] = `translateY(${y}px)`;
    element.style["-transform"] = `translateY(${y}px)`;    
    return element;
}