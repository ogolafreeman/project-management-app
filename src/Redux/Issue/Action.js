import api from "@/config/api";
import * as actionTypes from "./ActionTypes";

export const fetchIssues = (id) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.FETCH_ISSUES_REQUEST});
        try {
            const response = await api.get(`/api/issues/project/${id}`);
            console.log("fetch issues", response.data);
            dispatch({
                type: actionTypes.FETCH_ISSUES_SUCCESS,
                issues:response.data,
            });
        } catch (error) {
            
        }
    }
} 