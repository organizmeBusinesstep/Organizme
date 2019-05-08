// Import Libraries
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ModalRemoveComponent } from '../../components/modal-remove.component';


// Import Services
import { ContactService } from '../../services/contact.service';

// Import Models
import { Contact } from '../../domain/my-contacts_db/contact';
import { Company } from '../../domain/my-contacts_db/company';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactEditComponent } from '../contact-edit/contact-edit.component';
// START - USED SERVICES
/*
 *	ContactService.delete
 *		PARAMS: 
 *		
 *
 *	ContactService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ContactService  
 */
// END - REQUIRED RESOURCES

@Component({
    selector: "home",
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    // Attributes
    list: Contact[];
    search: any = {};
    idSelected: string;
    
    // Constructor
    constructor(
        private contactService: ContactService,
        private dialog: MatDialog) {}

    // Functions
    ngOnInit(): void {
        this.contactService.list().subscribe(list => this.list = list);
    }

    removeContact(id: string): void {
        let dialogRef = this.dialog.open(ModalRemoveComponent, {
            width: '250px',
            data: () => {
                // Execute on confirm
                this.contactService.remove(id).subscribe(() => {
                    dialogRef.close();
                });
                this.list = this.list.filter(item => item._id != id);
            }
        });
    }

    viewContact(id: string) {
        this.dialog.open(ContactDetailComponent, {
            width: '450px',
            data: {
                id: id
            }
        });
    }

    editContact(id: string) {
        this.dialog.open(ContactEditComponent, {
            width: '450px',
            data: {
                id: id,
                callbackRefresh: () => {
                    this.contactService.list().subscribe(list => this.list = list);
                }
            }
        });
    }

}