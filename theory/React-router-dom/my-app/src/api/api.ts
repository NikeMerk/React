export const getList = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(res => res)
}
export const getObject = (id: string) => {
  id = id.slice(1)
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:"get"})
    .then(res => res.json())
    .then(res => res)
}