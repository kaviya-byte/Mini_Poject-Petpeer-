import { HttpHeaders } from '@angular/common/http';

export class AppConstants {
    public static allAvailableStatuses = [
        { status: 'available' },
        { status: 'sold' }
    ];

    public static contentTypeOptions = {
        json: 'application/json',
    };

    public static buildHttpHeader = (contentType: any) => {
        return {
            headers: new HttpHeaders({
                'Content-Type': contentType,
            })
        };
    }
}