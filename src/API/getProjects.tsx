import axios from 'axios'

const getProjects = async () => {
  let {data} = await axios.get(`http://api.daveleoshilander.com/api/projects`)
  return data
}

export default getProjects;
