public with sharing class ContactListController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        String CONTACT_QUERY = 'SELECT FirstName, LastName, Phone FROM Contact';
        return Database.query(CONTACT_QUERY);
    }
}