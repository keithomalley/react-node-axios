/*
    This is the "model" for the Projects. While react doesn't necessarily
    conform to the MVC model, it can act similarly.

    This app uses a querying package called Axios, which uses Promises,
    to send requests to and recieve data from the Node/Mongo API on our localhost
*/

var axios = require('axios');

// our base url
var api_url = "http://localhost:3000/"


// The necessary functions are packaged into an object to be exported and used
// in containers/controllers.

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

// export the object so that these functions can be called in the controllers
module.exports = projects;
