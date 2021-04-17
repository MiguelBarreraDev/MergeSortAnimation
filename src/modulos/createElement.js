export const createSubArray = (arr, start, end) => {
    let fragment = document.createElement("div");
    fragment.classList.add("array_container")
    for(let i = start; i < end; i++) {
        fragment.innerHTML += `<div class="array_element"><p>${arr[i].textContent}</p></div>`
    }
    return fragment;
}