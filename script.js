let form = document.getElementById("launchForm")

form.addEventListener("submit", function (event) {
      event.preventDefault();
  const formData = new FormData(this);

  const reqData = {};
  formData.forEach((value, key) => {
    reqData[key] = value;
  });

    console.log(reqData);
    
    fetch("http://localhost:5000/launch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        alert("Application launched successfully");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Error launching application");
      });

})