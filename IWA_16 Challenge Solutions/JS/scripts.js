// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  const createHtml = (athlete) => { /**assume the athlete refers to their code */
    const {firstName, surname, id, races} = athlete; /**here we destruct with athlete being the athlete code passed by the call functions */
    const lastRace = races.length - 1; /**here we get the last race in the array (ie. the most recent race) 
    we do it like this as the last one should always be the most recent and the number of races ran is not constant*/
    const timeDestructure = races[lastRace].time; /**here we destruct the last race */
    
    const fragment = document.createDocumentFragment();/**this basically creates an empty element that we then fill */
  
    const title = document.createElement("h2");
    title.innerHTML = id ; /**here we create the inner text for h2 to be the athlete id*/
    fragment.appendChild(title); /** this is where we attach the element to the fragment */
  
    const list = document.createElement("dl");

    const date = new Date (races[lastRace].date); /** here we create a new date entry and pass it the deconstructed date from the last race */
    const day = date.getDate(); /** here we get the date as a number from our new date */
    const month = MONTHS[date.getMonth()];/** here we get the month as a number and then use that as a reference in our month array to get the short hand */
    const year = date.getFullYear(); /** here we get the year in full as a number ie 2022 instead of 113*/

    const [first, second, third, fourth] = timeDestructure; /** here we destructure the time */
    const total = first + second + third + fourth; /** here we calculate the total time for the last race */

    const hours = ((Math.floor(total / 60)).toString()).padStart(2, `0`);/** here we round down the equation of total minutes divided by 60 to get the total hours they took to complete
    we then add 0's to the start of the number so that the number will equal at least 00 or 0X or XX where x is the hours it took to run
    important to note is that we needed to turn the number to a string to run the .padStart() method */
    const minutes = ((total % 60).toString()).padStart(2, `0`);/** here we take the remainder after the equation and add 0's to the beginning for formatting */
  
    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName +` `+ surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day +` `+ month +` `+ year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours +`:`+ minutes}</dd>
    `;/** here we create the html and insert the relevant information by referencing the relevant variables.
    we then format it so that there are either spaces between variables or time formatting as needed.
    note we do the .length method on races to get the number of items in the races.array which should give us the number of races the athlete has partaken in*/

  
    fragment.appendChild(list); /** this is where we attach the element list to the fragment */

    return fragment/** here we return the product of this function as a node */
  }
  
  const {response: { data: {NM372, SV782}}} = data /** here we destruct data */
  document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372)); /** here we call the function passing Nwabisa as the argument */
  document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782)); /** here we call the function passing Schalk as the argument */
  // this section also appends the node returned by the function to the relevant <section></section> as the text between '><'
    // the problem with this section was that the querySelector wasn't targeting properly and we hadn't destructed data so that we could pass the athletes
