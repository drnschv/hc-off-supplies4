namespace hc450.officesupplies4;

using {Currency} from '@sap/cds/common';

entity Products {
        @Common.Label: 'UUID'
    key ID               : UUID;
        identifier       : String;
        title            : String;
        description      : String;
        availability     : Integer;
        storage_capacity : Integer;
        criticality      : Integer;
        price            : Decimal(9, 2);
        currency         : Currency;
        supplier         : Association to Suppliers;
        image_url        : String;
}

entity Suppliers {
    key ID         : UUID;
        identifier : String;
        name       : String;
        phone      : String;
        building   : String;
        street     : String @multiline;
        postCode   : String;
        city       : String;
        country    : String;
        products   : Composition of many Products
                         on products.supplier = $self;
}