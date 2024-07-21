// src/models/peopleModel.js
class People {
    constructor(name, lastName, birthday, email, phone, idDocumentType, document, idGender, idDepartment, idCity) {
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
        this.idDocumentType = idDocumentType;
        this.document = document;
        this.idGender = idGender;
        this.idDepartment = idDepartment;
        this.idCity = idCity;
    }
}

export default People;
