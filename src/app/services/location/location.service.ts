import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiResponse } from 'src/app/models/apiResponse';
import { Region } from 'src/app/models/region';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

constructor(private http:HttpClient) { }

async getRegion(){
    return await lastValueFrom(this.http.get<ApiResponse<Region>>(`${environment.apiUrl}region`));
}

async getComuna(regionId:number){
    return await lastValueFrom(this.http.get<ApiResponse<Region>>(`${environment.apiUrl}comuna/` + regionId));
}
}