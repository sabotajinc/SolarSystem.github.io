const elem = document;
const messagePromise = new Promise((resolve) => {
    elem.addEventListener('click', resolve);   
    elem.addEventListener('keydown', resolve);  
}).then(()=>setTimeout(()=>alert('Hello world'), 3000));