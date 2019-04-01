import axios from 'axios'

const getProjects = async () => {
   let {data} = await axios.get(`http://api.daveleoshilander.com/api/projects`)
    return data
   // let result = await axios.get(`http://localhost:7500/api/projects`)

  // console.log(data)
  // return result.data
}

export default getProjects;
