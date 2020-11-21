import axios from 'axios';

export default {
    searchBooks: function(query, API_KEY){
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query + `&key=${API_KEY}`);
    },
    getBooks: function(){
        return axios.get('/api/books');
    },
    getBook: function(id){
        return axios.get('/api/books/' + id);
    },
    saveBook: function(book){
        return axios.post('/api/books', {data: book});
    },
    removeBook: function(id){
        return axios.delete('/api/books/' + id);
    },
    getAPIKEY: function(){
        return axios.get('/api/apiKey');
    }
}