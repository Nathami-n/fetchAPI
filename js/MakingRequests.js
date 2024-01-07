// using promise chaining

//fetching data from a dummy api
const apiUrl = "https://reqres.in/api/users";

//making GET request using promise chaining
//comment out this section to see the result
// let response = fetch(apiUrl);
// response.then(data => {
//     return data.json()
// })
// .then(value => {
//     let userData = value.data;
//     console.log(userData);
// })


//making GET request using async/await

//function to get data
const fetchData = async () => {
    let response = await fetch(apiUrl);
    let data = await response.json();
    let users = data.data;
    return users;
}

//function to display/ work on the user data
// const useData = async (data) => {
//     let users = await fetchData();
//     users.forEach(user => {
//         console.log(user);
//     })
// }
// useData()


