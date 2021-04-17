export const coordenadas = (element) => {
    let x = element.getBoundingClientRect().left;
    let y = element.getBoundingClientRect().top;
    return {x, y};
}