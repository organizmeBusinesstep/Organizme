// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { CompanyService } from '../../services/company.service';

// Import Models
import { Company } from '../../domain/my-contacts_db/company';

import { Contact } from '../../domain/my-contacts_db/contact';
import { ContactService } from '../../services/contact.service';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { MatDialog } from '@angular/material';

// START - USED SERVICES
/*
 *	CompanyService.create
 *		PARAMS: 
 *		
 *
 *	CompanyService.get
 *		PARAMS: 
 *		
 *
 *	CompanyService.update
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * CompanyService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for CompanyEdit
 */
@Component({
    selector: 'company-edit',
    templateUrl : './company-edit.component.html',
    styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

    item: Company;
    listCompany: Company[];
	externalContact: Contact[];
    model: Company;
    
    constructor(
        private companyService: CompanyService,
        private contactService: ContactService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private location: Location) {
        // Init item
        this.item = new Company();
	   this.externalContact = [];
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.companyService.get(id).subscribe(item => this.item = item);
                    this.contactService.findByCompany(id).subscribe((list:any) => this.externalContact = list);
                }
            });
    }

    /**
     * Save Item
     */
    save (formValid: boolean, item: Company): void {
        if (formValid) {
            if (item._id) {
                this.companyService.update(item).subscribe(data => this.goBack());
            } else {
                this.companyService.create(item).subscribe(data => this.goBack());
            }
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    
    /**
     * View Contact
     */
    viewContact(id: string) {
        this.dialog.open(ContactDetailComponent, {
            width: '450px',
            data: {
                id: id
            }
        });
    }

}