import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of } from "rxjs";
import { addData, addDataSuccess, deleteData, deleteDataSuccess, error, getData, getDataSuccess, loadData, loadDataSuccess, updateData, updateDataSuccess } from "./data.action";
import { EmployeeService } from '../service/employee.service';

@Injectable()
export class DataEffects
{
    constructor (private action$: Actions, private employeeService: EmployeeService) { }
    loadData$ = createEffect(() =>
    {
        return this.action$.pipe(
            ofType(loadData),
            switchMap(() =>
            {
                return this.employeeService.getEmployees().pipe(map((value) =>
                {
                    return loadDataSuccess({ data: value });
                }),
                    catchError(err => of(error(err)))
                )
            }))
    });
    getData$ = createEffect(() =>
    {
        return this.action$.pipe(
            ofType(getData),
            switchMap((item) =>
            {
                return this.employeeService.getDetails(item.id).pipe(map((value) =>
                {
                    return getDataSuccess({ data: value });
                }),
                    catchError(err => of(error(err)))
                )
            }))
    });

    addData$ = createEffect(() =>
    {
        return this.action$.pipe(
            ofType(addData),
            switchMap((value: any) =>
            {
                return this.employeeService.addDetails(value.data).pipe(map((value) =>
                {
                    return addDataSuccess({ data: value });
                }),
                    catchError(err => of(error(err)))
                )
            }))
    });
    updateData$ = createEffect(() =>
    {
        return this.action$.pipe(
            ofType(updateData),
            switchMap((value: any) =>
            {
                return this.employeeService.updateDetails(value.id, value.data).pipe(map((value) =>
                {
                    return updateDataSuccess({ data: value });
                }),
                    catchError(err => of(error(err)))
                )
            }))
    });

    deleteItem$ = createEffect(() =>
        this.action$.pipe(
            ofType(deleteData),
            switchMap((data: any) =>
            {
                return this.employeeService.deleteDetail(data._id).pipe(
                    map((value: any) =>
                    {
                        return deleteDataSuccess({ data: value });
                    }), catchError(err =>of(error({error:err})))
                );
            })
        )
    );

}