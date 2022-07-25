const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

const userObject = () => {
    const newUserObject = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneMumber: faker.phone.imei(),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        _id:faker.random.numeric()
    };
    return newUserObject;
};
    


const companyObject = () => {
    const newCompany = {
        _id:faker.random.numeric(),
        name:faker.company.companyName(),
        address: {
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country(),
        }
    }
    return newCompany;
}


const newUserO = userObject();
console.log(newUserO);

const newCompanyo = companyObject();
console.log(newCompanyo)

app.get("/api/users/new", (req, res) => {
    res.json(newUserO);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newCompanyo);
});

app.get( "/api/user/company", (req, res) => {
    res.json({User:userObject(), Company:companyObject()});
});













app.listen(port, () => console.log(`Running on port ${port}!`));