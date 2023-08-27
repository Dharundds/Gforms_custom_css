const submitForm = () => {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  console.log("hi");
  const formData = new FormData();
  formData.append("entry.967003660", name);
  formData.append("entry.1553359931", age);
  formData.append("entry.955928929", email);

  fetch(
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdkaPCNnuqrv-SFuMOBp6ZpgX4oLhaFLDLFqZ0LjuWT0E9pFA/formResponse",
    {
      method: "POST",
      body: formData,
      mode: "no-cors",
    }
  ).then((res) => console.log(res));
  alert("done.");
};
