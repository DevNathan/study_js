fetch("https://jsonplaceholder.typicode.com/posts/100")
  .then((response) => {
    if (!response.ok) {
      throw new Error("response: ${response.status}");
    }
    return response.json();
  })
  .then((post) => {
    if (!post) {
      throw new Error("none result");
    }
    return { id: post.id, title: post.title };
  })
  .then(console.log)
  .catch((error) => {
    console.error(error);
    console.error("error");
  });