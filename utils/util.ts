/**
 * Interface for the project input to the components
 */
export interface ProjectInterface {
    projectName: string,
    projectDescription: string,
    topics: string[],
    localPathToImg: string,
    projectURL: string
};

/**
 * Function that determines if a section is visible
 * @param section The HTML element that is being checked
 * @returns Whether or not the element is visible on the screen
 */
export function isInViewport(section:HTMLElement):boolean {
    // Get the bounding box of the element
    const box:DOMRect = section.getBoundingClientRect();
    return  (box.top >= 0 && box.top < window.innerHeight) || // Top is visible
            (box.bottom >= 0 && box.bottom < window.innerHeight) || // Bottom is visible
            (box.top < 0 && box.bottom > window.innerHeight); // Neither top nor bottom are visible but we are in between
}