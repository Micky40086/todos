const axios = require('axios')

export function getRepositories(user_name) {
  return axios.get("https://api.github.com/users/" + user_name + "/repos")
}