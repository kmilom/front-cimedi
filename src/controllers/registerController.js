// src/controllers/registerController.js
import People from '../models/peopleModel';
import Patients from '../models/patientsModel';
import Users from '../models/usersModel';
import { savePeople, savePatients, saveUsers } from '../services/registerService';

const registerPerson = async (formData) => {
    const person = new People(
        formData.name,
        formData.lastName,
        formData.birthday,
        formData.email,
        formData.phone,
        formData.idDocumentType,
        formData.document,
        formData.idGender,
        formData.idDepartment,
        formData.idCity
    );

    const id = await savePeople(person);

    const patient = new Patients( id,formData.idEps);

    await savePatients(patient);

    const user = new Users( id,formData.userName,formData.password);

    await saveUsers(user);
};

export default registerPerson;
