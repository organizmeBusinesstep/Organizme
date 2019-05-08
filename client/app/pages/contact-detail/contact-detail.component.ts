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
 * Edit component for ContactDetail
 */
@Component({
    selector: 'contact-detail',
    templateUrl : './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

    idContact: any;
    item: Contact;
    listCompany: Company[];
    model: Contact;
    
    constructor(
        public dialogRef: MatDialogRef<ContactDetailComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private contactService: ContactService,
        private companyService: CompanyService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Contact();
        this.idContact = data.id;
    }

    ngOnInit(): void {
        // Get item from server 
        this.contactService.get(this.idContact).subscribe(item => {
            this.item = item;
            this.companyService.list().subscribe(list => {
                list.filter( (comp: Company) => {
                    if (comp._id === item.company) {
                        item.company = comp.name;
                    }
                });
            });
        });
    }

    /**
     * Close Modal
     */
    close(): void {
        this.dialogRef.close();
    }

}