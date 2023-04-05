const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=8c6255310e15495485f78bb17b744a5e`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Network response was not ok (${response.status} ${response.statusText})`
      );
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // log the data object to the console
    const articles = data.articles;
    const newsList = document.getElementById("newsList");

    articles.forEach((article) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${article.url}">
          <img src="${article.urlToImage}" alt="${article.title}" style="width: 200px;height: auto;margin-right: 20px; ">
          <h2 class="article-title" style="font-size: 1.2rem; margin: 0;">${article.title}</h2>
        </a>
        <p class="article-description">${article.description}</p>
        <p class="article-source" style="font-size: 11px;font-style: italic;color: #888;">Source: ${article.source.name}</p>
      `;
      newsList.appendChild(li);
    });
  })
  .catch((error) => console.log(error));
