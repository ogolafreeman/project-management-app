import * as actionTypes from './ActionTypes';

const initialSatate = {
    message:[],
    loading: false,
    error:null,
    chat:null
};
const chatReducer = (state = initialSatate, action) =>{
    switch (action.type) {
        case actionTypes.FETCH_CHAT_MESSAGES_REQUEST:
        case actionTypes.SEND_MESSAGE_SUCCESS:
        case actionTypes.FETCH_MESSAGES_REQUEST:
            return{
                ...state,
                loadin:true,
                error:null
            };
            case actionTypes.FETCH_MESSAGES_SUCCESS:
            case actionTypes.FETCH_CHAT_MESSAGES_SUCCESS:
            return{
                ...state,
                loadin:false,
                message:action.message
            };
            case actionTypes.SEND_MESSAGE_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    message: [...state.message, action.message]
            };
            case actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    chat: action.chat
            };
            case actionTypes.FETCH_MESSAGES_FAILURE:
            case actionTypes.SEND_MESSAGE_FAILURE:
            case actionTypes.FETCH_CHAT_MESSAGES_FAILURE:
                return{
                    ...state,
                    loading: false,
                    erro: action.error
            };

    
        default:
            return state;
    }
};
export default chatReducer;