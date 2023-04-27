console.log('API Demo!')

const container = document.querySelector('.container')

const getFormData = async (e) => {
    e.preventDefault();

    const post_id = e.target.post_id.value;
    const url = `https://finstagram-padawans115.onrender.com/api/posts/${post_id}`
    // There are several ways to make a request. Fetch is the built in function to make HTTP Requests
    // Axios is another popular library you can import/install

    // Syntax:
    // fetch(url) 
    // fetch(url, options)
    // options is a object that has more info about the request you are making
    /*
    options = {
        method: "POST",
        body: <string>
        headers: {
            "Content-Type": 'application/json'
        }
        
    } 
    */
   
    // fetch.then((res)=>{return res.json()}).then((data)=>{"use 'data' here"})
    const res = await fetch(url)
    const data = await res.json();
    console.log(data)

    render(data)
    
};

const render = (data) => {
    container.innerHTML = ''
    let newHtml;
    if (data.status==' ok') {
        const post = data.post
        newHtml = document.createElement('div')
        newHtml.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${post.img_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${post.title} - ${post.author}</h5>
                <p class="card-text">${post.caption}</p>
            </div>
        </div>
        `
         
    }
    else {
        newHtml = document.createElement('h2')
        newHtml.innerText = data.message
        
    }
    container.append(newHtml)
};

const form = document.getElementById('myForm');
form.addEventListener('submit', getFormData)