import { createAction, props } from "@ngrx/store";
import { EmployeeModel } from "./data.model";


export const loadData = createAction("loadData");
export const loadDataSuccess = createAction("loadDataSuccess", props<{ data: any }>());
export const getData = createAction("getData", props<{ id: any }>());
export const getDataSuccess = createAction("getDataSuccess", props<{ data: any }>());
export const addData = createAction("addData", props<{ data: any }>());
export const addDataSuccess = createAction("addDataSuccess", props<{ data: any }>());
export const updateData = createAction("updateData", props<{ id: any, data: any }>());
export const updateDataSuccess = createAction("updateDataSuccess", props<{ data: any }>());
export const deleteData = createAction("deleteData", props<{ data: any }>());
export const deleteDataSuccess = createAction("deleteDataSuccess", props<{ data: any }>());
export const error = createAction("error", props<{ error: any }>());