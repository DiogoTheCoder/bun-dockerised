export default {
  port: 3000,
  fetch(request) {
    console.log(1 + 1);
    console.log(request);
    return new Response("Welcome to Bun!");
  },
};
