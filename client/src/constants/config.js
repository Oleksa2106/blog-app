/// API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, please wait'
    },
    success:{
        title: 'Success',
        message: 'Data sucessfully loaded'
    },
    responseFailure:{
        title:'Error',
        message: 'An error occured while fetching response from server. Please try again'
    },
    requestFailure:{
        title: ' Error',
        message: 'An error occured while parsing request data'
    },
    networkError:{
        title: 'Error',
        message: 'Unable to connect with the server. Please check internrt connectivity and try again later'
    }
}

//API SERVICE CALL
//SAMPLE REQUEST
//NEED SERVICE CALL : { url: '/', method: 'POST/GET/PUT/DELETE' params:true/false, query: truse/false }
export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST'},
    userLogin: {url: '/login', method: 'POST'}
}