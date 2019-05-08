// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { CompanyService } from '../../services/company.service';

// Import Models
import { Company } from '../../domain/my-contacts_db/company';

import { Contact } from '../../domain/my-contacts_db/contact';

// START - USED SERVICES
/*
 *	CompanyService.delete
 *		PARAMS: 
 *		
 *
 *	CompanyService.list
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

@Component({
    selector: "company",
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
    
    // Attributes
    list: Company[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private companyService: CompanyService, 
        public dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.companyService.list().subscribe(list => this.list = list);
    }

    openModal(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.companyService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

}