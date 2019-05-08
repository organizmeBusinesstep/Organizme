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
import { ContactBaseService } from "./base/contact.base.service";
import { Contact } from '../domain/my-contacts_db/contact';

/**
 * YOU CAN OVERRIDE HERE ContactBaseService
 */

@Injectable()
export class ContactService extends ContactBaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}