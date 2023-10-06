import { createReducer, on } from "@ngrx/store"
import { addData, addDataSuccess, deleteData, deleteDataSuccess, error, getData, getDataSuccess, loadData, loadDataSuccess, updateData, updateDataSuccess } from "./data.action"
import { EmployeeModel } from "./data.model";

const initialState: EmployeeModel = {
    employeeDetails: [],
    error: ''

}

export const DataReducer = createReducer(initialState,
    on(loadData, (state) =>
    {
        return state;
    }),
    on(loadDataSuccess, (state, action) =>
    {
        return {
            employeeDetails: action.data,
            error: ''
        }
    }),
    on(getData, (state) =>
    {
        return state;
    }),
    on(getDataSuccess, (state, action) =>
    {
        return {
            employeeDetails: action.data,
            error: ''
        }
    }),
    on(addData, (state, action) =>
    {
        return state;
    }),
    on(addDataSuccess, (state, action) =>
    {
        return {
            employeeDetails: action.data,
            error: ''
        }
    }),
    on(updateData, (state, action) =>
    {
        return state;
    }), on(updateDataSuccess, (state, action) =>
    {
        return {
            employeeDetails: action.data,
            error: ''
        }
    }),
    on(deleteData, (state, action) =>
    {
        return state;
    }), on(deleteDataSuccess, (state, action) =>
    {
        return {
            employeeDetails: action.data,
            error: ''
        }
    }),
    on(error, (state, action) =>
    {
        return {
            ...state,
            error: action.error
        };
    })
)