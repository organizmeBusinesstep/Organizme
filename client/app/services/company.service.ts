// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { CompanyBaseService } from "./base/company.base.service";
import { Company } from '../domain/my-contacts_db/company';

/**
 * YOU CAN OVERRIDE HERE CompanyBaseService
 */

@Injectable()
export class CompanyService extends CompanyBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}