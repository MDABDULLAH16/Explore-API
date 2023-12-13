function LoadData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => DisplyData(data));
}

function DisplyData(data) {
  console.log(data);
}
