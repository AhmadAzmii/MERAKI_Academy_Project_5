import { createSlice } from "@reduxjs/toolkit";

export const roleSlice = createSlice({
    name:"roles",
    initialState:{
        roles:[],
        permissions:[],
        rolePermissions:[],
    },
    reducers:{
        getRoles : (state,action) =>{
            state.roles = action.payload
        },
        getPermissions : (state,action) =>{
            state.permissions = action.payload
        },
        getRolePermissions : (state,action) =>{
            state.rolePermissions = action.payload
        },
        addRole: (state, action)=>{
            state.roles.push(action.payload);
        },
        addPermission: (state, action)=>{
            state.permissions.push(action.payload);
        },
        addRolePermission: (state, action)=>{
            state.rolePermissions.push(action.payload);
        },
        deleteRolePermissionByid: (state,action) =>{
            state.rolePermissions.splice(action.payload.id,1);
        },
    }
})

export const {getRoles,getPermissions,getRolePermissions,addRole,addPermission,addRolePermission,deleteRolePermissionByid} = roleSlice.actions;

export default roleSlice.reducer;