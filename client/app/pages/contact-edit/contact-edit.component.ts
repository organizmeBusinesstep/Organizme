// Import Libraries
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// Import Services
import { ContactService } from '../../services/contact.service';
import { CompanyService } from '../../services/company.service';

// Import Models
import { Contact } from '../../domain/my-contacts_db/contact';
import { Company } from '../../domain/my-contacts_db/company';


// START - USED SERVICES
/*
 *	ContactService.create
 *		PARAMS: 
 *		
 *
 *	ContactService.get
 *		PARAMS: 
 *		
 *
 *	CompanyService.list
 *		PARAMS: 
 *		
 *
 *	ContactService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * CompanyService  
 * ContactService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for ContactEdit
 */
@Component({
    selector: 'contact-edit',
    templateUrl : './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

    callbackRefresh: any;
    idContact: any;
    item: Contact;
    listCompany: Company[];
    model: Contact;
    
    constructor(
        public dialogRef: MatDialogRef<ContactEditComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private contactService: ContactService,
        private companyService: CompanyService,
        private route: ActivatedRoute,
        private location: Location) {
            
        // Init item
        this.item = new Contact();
        this.idContact = data.id;
        this.callbackRefresh = data.callbackRefresh;
    }

    ngOnInit(): void {
        if (this.idContact !== 'new') {
            // Get item from server 
            this.contactService.get(this.idContact).subscribe(item => this.item = item);
        }
        this.companyService.list().subscribe(list => this.listCompany = list);
}

    /**
     * Save Item
     */
    save (formValid: boolean, item: Contact): void{
        if (formValid) {
            if (item._id) {
                this.contactService.update(item).subscribe(data => this.closeAndRefresh());
            } else {
                this.contactService.create(item).subscribe(data => this.closeAndRefresh());
            }
        }
    }

    /**
     * Go Back
     */
    close(): void {
        this.dialogRef.close();
    }

    closeAndRefresh(): void {
        if (this.callbackRefresh) {
            this.callbackRefresh();
        }
        this.close();
    }

}