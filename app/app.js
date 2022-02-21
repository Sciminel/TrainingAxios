// This function loads simpson data from the simpson quote API
function fetchSimpsonJSON() {
    // Feel free to download this HTML and edit it, to use another simpson ID
    const simpsonsId = 1;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes?count=${simpsonsId}`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(quotes) {
        console.log('data decoded from JSON:', quotes);
  
        // Build a block of HTML

            const simpsonHtml = `
            <p><strong>${quotes[0].quote}</strong></p>
            <img src="${quotes[0].image}" />
          `;
          document.querySelector('#simpson-quotes').innerHTML = simpsonHtml;
        
      });
  }
  
  fetchSimpsonJSON();
document.querySelector('.btn').addEventListener('click', (e) =>   fetchSimpsonJSON())
