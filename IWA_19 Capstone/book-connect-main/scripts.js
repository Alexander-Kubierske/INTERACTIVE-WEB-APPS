// This file handles the user interaction with the website using data from the data.js file

// +++++ Imports +++++
// import any variables or functions
import { BOOKS_PER_PAGE, authors, genres, books} from './data.js' 

// +++++ Validation +++++
// validate our imports
if (!books && !Array.isArray(books)) throw new Error('Source required');
if (!books && books.length < 2) throw new Error('Range must be an array with two numbers') 

// +++++ Global Variables +++++
// used to declare any variables which the file might need
let matches = books;
let page = 0;
const fragment = document.createDocumentFragment();
const extracted = matches.slice((page*BOOKS_PER_PAGE), ((page + 1)*BOOKS_PER_PAGE));
const css = {
    day:{
        dark: '10, 10, 20',
        light: '255, 255, 255',
    },
    
    night:{
        dark: '255, 255, 255',
        light: '10, 10, 20',
    },
    current:'',
};

// +++++ Functions +++++
// holds our functions

/**
 * This function creates the html element that displays the basic information of a book
 * as a button and returns that element.
 * 
 * @param {string} author - author of the book as an id string
 * @param {string} id - the id of the book as an id string
 * @param {string} image - the cover image as a link string
 * @param {string} title - the title of the book as a string
 * @returns {HTMLElement} - the button element
 */
const createPreview = ({ author, id, image, title }) => {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);

    element.innerHTML = /* html */ `
        <img
            class="preview__image"
            src="${image}"
        />
            
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;
    return element;
};

/**
 * This function passes the extracted variable to createPreview 
 * and appends the returned elements to our DOM
 * 
 * @param {Array} extracted - specific section of books we need to load
 */
const pageLoader = (extracted) => {
    for (const{author, image, title, id } of extracted) {

        const preview = createPreview({
            author,
            id,
            image,
            title
        });

        fragment.appendChild(preview);
    };

    document.querySelector('[data-list-items]').appendChild(fragment);
}

/**
 * This function populates our search dialogue with the genres.
 * 
 * @param {object} genres - the genres object from data.js
 */
const createGenreOptions = (genres) =>{
    const genreOptions = document.createDocumentFragment();
    let element = document.createElement('option');
    element.value = 'any';
    element.innerText = 'All Genres'; // this adds an option called all genres
    genreOptions.appendChild(element);

    for (const [id, name] of Object.entries(genres)) { // another for loop choice that populates the select element options
        element = document.createElement('option');
        element.value = id;
        element.innerText = name;
        genreOptions.appendChild(element);
    };

    document.querySelector('[data-search-genres]').appendChild(genreOptions); // adds all options to the select element for each genre
};

/**
 * This function populates our search dialogue with the authors.
 * 
 * @param {object} authors - the authors object from data.js
 */
const createAuthorOptions = (authors) =>{
    const authorOptions = document.createDocumentFragment() ;
    let element = document.createElement('option');
    element.value = 'any';
    element.innerText = 'All Authors';
    authorOptions.appendChild(element);

    for (const [id, name] of Object.entries(authors)) {
        element = document.createElement('option');
        element.value = id;
        element.innerText = name;
        authorOptions.appendChild(element);
    };

    document.querySelector('[data-search-authors]').appendChild(authorOptions);
};

/**
 * This function checks if the users browser or user has 
 * a specific theme and sets our website to either dark or light theme
 * 
 */
const defaultTheme = () => {
    const themeEvaluation = document.querySelector('[data-settings-theme]').value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeValues = themeEvaluation? 'night' : 'day';

    document.documentElement.style.setProperty('--color-dark', css[themeValues].dark);
    document.documentElement.style.setProperty('--color-light', css[themeValues].light);
    css.current = themeValues;
};

/**
 * This function toggles the show more button and
 * populates it with the amount of books left to show
 * 
 */
const showMoreButton = () => {
    const moreButton = document.querySelector('[data-list-button]');
    const remainingMatches = matches.length - ((page + 1) * BOOKS_PER_PAGE);
    moreButton.disabled = remainingMatches <= 0;
    const buttonTurnery = remainingMatches > 0 ? remainingMatches : 0;

    moreButton.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${buttonTurnery})</span>
`;
};

/**
 * This function populates the page with the next 36/remaining
 * book previews
 * 
 */
const handleShowMore = () => {
    page = page + 1;
    const extracted = matches.slice((page*BOOKS_PER_PAGE), ((page + 1)*BOOKS_PER_PAGE));  
    pageLoader(extracted);
    showMoreButton(); 
};

/**
 * This function toggles our description dialogue
 * and populates the description fields.
 * 
 * @param {event} `click`
 */
const handleDescriptionToggle = (event) => {
    if (document.querySelector('[data-list-active]').open) {
        document.querySelector('[data-list-active]').open = false;

    } else {
        const pathArray = Array.from(event.path || event.composedPath());
        let active = null;

        for (const node of pathArray) {
            if (active) break;
            const previewId = node?.dataset?.preview;
        
            for (const singleBook of books) {
                if (singleBook.id === previewId) active = singleBook;
            };
        };
        
        if (!active) return;
        document.querySelector('[data-list-active]').open = true;
        document.querySelector('[data-list-blur]').src = active.image;
        document.querySelector('[data-list-image]').src = active.image;
        document.querySelector('[data-list-title]').innerText = active.title;
        
        document.querySelector('[data-list-subtitle]').innerText = (authors[active.author]) +' ' + (new Date(active.published).getFullYear());
        document.querySelector('[data-list-description]').innerText = active.description;
    };
};

/**
 * This function toggles the search dialogue
 * resetting the form if the user cancels.
 * 
 */
const handleSearchToggle = () => { 

    if (document.querySelector('[data-search-overlay]').open){
        document.querySelector('[data-search-overlay]').open = false;
        document.querySelector('[data-search-form]').reset();
    } else {
        document.querySelector('[data-search-overlay]').open = true;
        document.querySelector('[data-search-title]').focus();
    };
};

/**
 * This function handles the search submit
 * changing all our variables to match the inputs
 * and then calls other functions to print results
 * 
 * @param {event} `submit`
 */
const handleSearchSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    for (const singleBook of books) {
        const titleMatch = filters.title.trim() === '' || singleBook.title.toLowerCase().includes(filters.title.toLowerCase());
        const authorMatch = filters.author === 'any' || singleBook.author === filters.author;
        
            let genreMatch = filters.genre === 'any';
            
            for (const singleGenre of singleBook.genres) {
                if (filters.genre === `any`) break;
                if (singleGenre === filters.genre) { 
                    genreMatch = true; 
                };
            };
        
        if (titleMatch && authorMatch && genreMatch) result.push(singleBook);
    };

    if (result.length < 1) {
        document.querySelector('[data-list-message]').classList.add('list__message_show');
        document.querySelector('[data-search-overlay]').open = false;
    } else {
        document.querySelector('[data-list-message]').classList.remove('list__message_show');
    };
    
    matches = result;
    page = 0;
    document.querySelector('[data-list-items]').innerHTML = '';
    const extracted = matches.slice((page*BOOKS_PER_PAGE), ((page + 1)*BOOKS_PER_PAGE)); 
    pageLoader(extracted); // indicate abstraction 
    showMoreButton();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('[data-search-overlay]').open = false;
};

/**
 * This function toggles the theme menu.
 * 
 */
const handleThemeToggle = () => {
    const current = document.querySelector(`[data-settings-overlay]`).open;
    
    if (current) {
        document.querySelector(`[data-settings-overlay]`).open = false;
        document.querySelector('[data-settings-theme]').value = css.current;
    } else {
        document.querySelector(`[data-settings-overlay]`).open = true;
    };
};

/**
 * This function changes the theme of our page
 * by interacting with the <html> style
 * 
 * @param {event} `click`
 */
const handleThemeSubmit = (event) => {
    event.preventDefault();
    const userTheme = document.querySelector('[data-settings-theme]').value;

    switch (userTheme) {
        case `day`:
            document.documentElement.style.setProperty('--color-dark', css[userTheme].dark);
            document.documentElement.style.setProperty('--color-light', css[userTheme].light);
            css.current = userTheme;
            break;
        case `night`:
            document.documentElement.style.setProperty('--color-dark', css[userTheme].dark);
            document.documentElement.style.setProperty('--color-light', css[userTheme].light);
            css.current = userTheme;
            break;
        default:
            defaultTheme();
            break;
    };

    document.querySelector(`[data-settings-overlay]`).open = false;
    document.querySelector('[data-settings-theme]').value = userTheme;
};

// +++++ Main Execution +++++
// loads the default page
pageLoader(extracted);
createGenreOptions(genres);
createAuthorOptions(authors);
defaultTheme();
showMoreButton();

// +++++ Event Listeners +++++
// checks to see if the user interacts with the page
document.querySelector(`[data-list-button]`).addEventListener(`click`, handleShowMore);

document.querySelector(`[data-list-items]`).addEventListener('click', handleDescriptionToggle);
document.querySelector(`[data-list-close]`).addEventListener('click', handleDescriptionToggle);

document.querySelector(`[data-header-search]`).addEventListener(`click`, handleSearchToggle);
document.querySelector(`[data-search-cancel]`).addEventListener(`click`, handleSearchToggle);
document.querySelector(`[data-search-form]`).addEventListener(`submit`, handleSearchSubmit);

document.querySelector(`[data-header-settings]`).addEventListener('click', handleThemeToggle);
document.querySelector(`[data-settings-cancel]`).addEventListener('click', handleThemeToggle);
document.querySelector(`[data-settings-form]`).addEventListener('submit', handleThemeSubmit);