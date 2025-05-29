const cardWrapper = document.querySelector('#row-wrapper');

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    posts.slice(0, 12).forEach((post) => {
      const col = document.createElement('div');
      col.className = 'col-sm-12 col-md-4 d-flex'; // makes column a flexbox item for equal height

      col.innerHTML = `
        <div class="card p-3 shadow w-100 h-100">
          <p class="lead">Post ID: ${post.id}</p>
          <h4 class="title">${post.title}</h4>
          <p class="description">${post.body}</p>
        </div>
      `;

      cardWrapper.appendChild(col);
    });

  } catch (err) {
    console.error(err);
  }
};

fetchData();
