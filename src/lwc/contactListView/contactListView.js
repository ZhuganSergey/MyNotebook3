import {LightningElement, wire, track} from 'lwc';
import getContactList from '@salesforce/apex/ContactListController.getContactList';

export default class ContactListView extends LightningElement {
    @track contactList;

    @wire(getContactList)
    getContacts({data, error}){
        if(data){
            this.contactList = data;
        } else if(error){
            console.log(error);
        }
    }
}