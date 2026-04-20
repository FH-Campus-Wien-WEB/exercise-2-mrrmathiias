window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */


        // Create main container
        const article = document.createElement("article");
        article.id = movie.imdbID;

        // Title
        const title = document.createElement("h1");
        title.textContent = movie.Title;

        // Poster
        const img = document.createElement("img");
        img.src = movie.Poster;
        img.alt = movie.Title;

        // Info (released + runtime)
        const info = document.createElement("p");
        info.textContent = `Released: ${movie.Released} | Runtime: ${movie.Runtime} min`;

        // Ratings
        const ratings = document.createElement("p");
        ratings.textContent = `IMDb: ${movie.imdbRating} | Metascore: ${movie.Metascore}`;

        // Genres
        const genresDiv = document.createElement("div");
        movie.Genres.forEach(genre => {
          const span = document.createElement("span");
          span.className = "genre";
          span.textContent = genre;
          genresDiv.appendChild(span);
        });

        // Directors
        const directors = document.createElement("p");
        directors.textContent = "Directors: " + movie.Directors.join(", ");

        // Writers
        const writers = document.createElement("p");
        writers.textContent = "Writers: " + movie.Writers.join(", ");

        // Actors
        const actors = document.createElement("p");
        actors.textContent = "Actors: " + movie.Actors.join(", ");

        // Plot
        const plot = document.createElement("p");
        plot.textContent = movie.Plot;

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
          location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        // Append everything
        article.appendChild(title);
        article.appendChild(img);
        article.appendChild(info);
        article.appendChild(ratings);
        article.appendChild(genresDiv);
        article.appendChild(directors);
        article.appendChild(writers);
        article.appendChild(actors);
        article.appendChild(plot);
        article.appendChild(editButton);

        bodyElement.appendChild(article);

      }
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
        xhr.status +
        " - " +
        xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};