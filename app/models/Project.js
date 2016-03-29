var axios = require('axios');

var api_url = "http://localhost:3000/"

var projects = {
  findAll: function (){
    return axios.get(api_url + 'projects');
  },
  find: function (index){
    return axios.get(api_url + 'projects/' + index);
  },
  add: function(project){
    return axios.post(api_url + 'projects', project);
  },
  delete: function(id){
    return axios.delete(api_url + 'projects/' + id);
  }
}

module.exports = projects;
