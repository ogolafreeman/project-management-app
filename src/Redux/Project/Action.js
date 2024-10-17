import { API_BASE_URL } from "@/config/api"
import { type } from "os"
import { ACCEPT_INVITATION_PROJECTS_REQUEST, ACCEPT_INVITATION_PROJECTS_SUCCESS, CREATE_PROJECTS_REQUEST, CREATE_PROJECTS_SUCCESS, DELETE_PROJECTS_SUCCESS, FETCH_PROJECTS_BY_ID_REQUEST, FETCH_PROJECTS_BY_ID_SUCCESS, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, INVITE_TO_PROJECTS_REQUEST, INVITE_TO_PROJECTS_SUCCESS, SEARCH_PROJECTS_REQUEST } from "./ActionTypes"

export const fetchProjects=({category,tag})=>async(dispatch)=>{
    dispatch({type:FETCH_PROJECTS_REQUEST})
    try {
        const {data}=await API_BASE_URL.get("/api/projects",{params:{category,tag}})
        console.log("all projects",data)
        dispatch({type:FETCH_PROJECTS_SUCCESS,projects:data})
    } catch (error) {
        console.log("error",error)
    }
}

export const searchProjects=(Keyword)=>async(dispatch)=>{
    dispatch({type:SEARCH_PROJECTS_REQUEST})
    try {
        const {data}=await API_BASE_URL.get("/api/projects/search?keyword="+Keyword,{params:{category,tag}})
        console.log("search projects",data)
        dispatch({type:FETCH_PROJECTS_SUCCESS,projects:data})
    } catch (error) {
        console.log("error",error)
    }
}

export const createProjects=(projectData)=>async(dispatch)=>{
    dispatch({type:CREATE_PROJECTS_REQUEST})
    try {
        const {data}=await API_BASE_URL.post("/api/projects",projectData)
        console.log("projects",data)
        dispatch({type:CREATE_PROJECTS_SUCCESS,project:data})
    } catch (error) {
        console.log("error",error)
    }
}

export const fetchProjectById=(id)=>async(dispatch)=>{
    dispatch({type:FETCH_PROJECTS_BY_ID_REQUEST})
    try {
        const {data}=await API_BASE_URL.get("/api/projects"+id)
        console.log("projects",data)
        dispatch({type:FETCH_PROJECTS_BY_ID_SUCCESS,project:data})
    } catch (error) {
        console.log("error",error)
    }
}

export const deleteProject=({projectId})=>async(dispatch)=>{
    dispatch({type:FETCH_PROJECTS_BY_ID_REQUEST})
    try {
        const {data}=await API_BASE_URL.delete("/api/projects"+projectId)
        console.log("delete projects",data)
        dispatch({type:DELETE_PROJECTS_SUCCESS,projectId})
    } catch (error) {
        console.log("error",error)
    }
}

export const inviteToProject=({email,projectId})=>async(dispatch)=>{
    dispatch({type:INVITE_TO_PROJECTS_REQUEST})
    try {
        const {data}=await API_BASE_URL.post("/api/projects/invite", {email,projectId})
        console.log("invite projects",data)
        dispatch({type:INVITE_TO_PROJECTS_SUCCESS,payload:data})
    } catch (error) {
        console.log("error",error)
    }
}

export const acceptInvitation=({invitationToken,navigate})=>async(dispatch)=>{
    dispatch({type:ACCEPT_INVITATION_PROJECTS_REQUEST})
    try {
        const {data}=await API_BASE_URL.post("/api/projects/accept_invitation", {
            params:{
                token:invitationToken
            }
        })
        navigate("/project"+data.projectId)
        console.log("Accept invitation",data)
        dispatch({type:ACCEPT_INVITATION_PROJECTS_SUCCESS,payload:data})
    } catch (error) {
        console.log("error",error)
    }
}
