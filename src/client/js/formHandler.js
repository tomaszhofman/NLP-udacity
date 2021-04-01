const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const results = document.getElementById('results');

export function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  results.innerHTML = '';
  let formText = document.getElementById('name').value;

  Client.checkForName(formText);

  const getKey = async function (server) {
    try {
      const res = await fetch(server);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getArticle = async function (url) {
    try {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const UpdateUI = async function (item) {
    const markup = `
    <h2 class="title-secondary">Form Results:</h2>
          <div class="grid-container">
          <div class="card">
              <p class="card__text">
                  Model
              </p>
              <h3 class="card__subtext">
                  ${item.model}
              </h3>
          </div>

          <div class="card">
              <p class="card__text">
                  Confidance
              </p>
              <h3 class="card__subtext">
                  ${item.confidence}
                
                 
              </h3>
          </div>

          <div class="card">
              <p class="card__text">
                  Agreement
              </p>
              <h3 class="card__subtext">
                  ${item.agreement}
                
                 </h3>
          </div>
          <div class="card">
              <p class="card__text">
                  Irony
              </p>
              <h3 class="card__subtext">
                  ${item.irony}
               
              </h3>
          </div>
        
      </div>
    `;
    results.insertAdjacentHTML('afterbegin', markup);
  };
  getKey('http://localhost:9002/api').then((res) =>
    getArticle(`${BASE_URL}${res.key}&lang=auto&url=${formText}`).then((res) =>
      UpdateUI(res)
    )
  );

  // console.log('::: Form Submitted :::');
  // fetch('http://localhost:8081/test')
  //   .then((res) => res.json())
  //   .then(function (res) {
  //     document.getElementById('results').innerHTML = res.message;
  //   });
}
