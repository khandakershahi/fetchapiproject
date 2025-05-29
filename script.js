// let tableBody = document.querySelector('#postsTable tbody');

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((posts) => {
//         posts.forEach((post) => {
//             let row = document.createElement("tr")

//             row.innerHTML = `
//             <td>${post.id}</td>
//             <td>${post.title}</td>
//             <td>${post.body}</td>`;

//             tableBody.appendChild(row);
//         });
//     });


// let tableBody = document.querySelector('#postsTable tbody');

// const fetchData = async() => {
//     try{

//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')

//         const posts = await response.json();

//         posts.forEach((post) => {
//             let row = document.createElement("tr")

//             row.innerHTML = `
//             <td>${post.id}</td>
//             <td>${post.title}</td>
//             <td>${post.body}</td>`;

//             tableBody.appendChild(row);
//         })

//         console.log(posts);

//     } catch(err){
//         console.log(err);
//     }
// }

// fetchData();




let card = document.querySelector('#row-wrapper');

const fetchData = async() => {
    try{

        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        const posts = await response.json();

        posts.slice(0,12).forEach((post) => {
            // let card = document.createElement("tr")

            card.innerHTML += `
             <div class="col-sm-12 col-md-4 col-lg-4">
                <div id="myCard" class="card p-3 m-1 shadow">
                    <p class="lead">Post ID:${post.id}</p>
                    <H4 class="title">${post.title}</H4>
                    <p class="descreption">${post.body}</p>
                </div>
               `

                // card.appendChild(card);
        })

        console.log(posts);

    } catch(err){
        console.log(err);
    }
}

fetchData();