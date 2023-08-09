"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  let textNodes = [];

  function recursion(element) {
    element.childNodes.forEach((node) => {
      if (node.nodeName.match(/^H\d/)) {
        const obj = {
          header: node.nodeName,
          content: node.textContent,
        };
        textNodes.push(obj);
      } else {
        recursion(node);
      }
    });
  }

  recursion(body);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(textNodes),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
