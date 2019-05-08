/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  FOR CUSTOMIZE ContactBaseService PLEASE EDIT ../Contact.service.ts
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */
 
//DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../../security/authentication.service';

// MODEL
import { Contact } from '../../domain/my-contacts_db/contact';

// CONFIG
import { config } from "../../../config/properties";

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Contact.service.ts
 */
 
/*
 * SCHEMA DB Contact
 * 
	{
		email: {
			type: 'String'
		},
		name: {
			type: 'String', 
			required : true
		},
		note: {
			type: 'String'
		},
		phone: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		company: {
			type: Schema.ObjectId,
			ref : "Contact"
		},
		
	}
 * 
 */
@Injectable()
export class ContactBaseService {

    contextUrl:string = config.host + "/contacts";
    constructor(
        protected http: Http,
        protected authenticationService: AuthenticationService) {
        
    }

//CRUD METHODS
	
	/**
     * Create new item
     */
     create(item: Contact): Observable<Contact> {
        return this.http
            .post(this.contextUrl, item)
            .map(response => response.json());
    }
	
	/**
     * Remove one item by id
     */
     remove(id: string): Observable<void> {
        return this.http
            .delete(this.contextUrl + "/" + id)
            .map(response => null);
    }
    
    /**
     * Find by company
     */
    findByCompany(id: string): Observable<Contact[]> {
        return this.http
            .get(this.contextUrl + '/findBycompany/' + id)
            .map(response => response.json() as Contact[]);
    }	
	
    /**
     * Get one item by id
     */
	
	get(id: string): Observable<Contact> {
        return this.http
            .get(this.contextUrl + "/" + id)
            .map(response => response.json() as Contact)
    }

	
    /**
     * Get list of items
     */
	
	list(): Observable<Contact[]> {
        return this.http
            .get(this.contextUrl)
            .map(response => response.json() as Contact[])
    }
	
    /**
     * Update item
     */
	update(item: Contact): Observable<Contact> {
        return this.http
            .post(this.contextUrl + '/' + item._id, item)
            .map(response => response.json())
    }



}