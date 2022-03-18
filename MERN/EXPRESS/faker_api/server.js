const express = require("express")
const app = express();
const {faker} = require("@faker-js/faker");
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

class User {
    constructor() {
        this.id = faker.datatype.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.number();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetAddress(),
            city : faker.address.city(),
            state : faker.address.state(),
            zip : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

app.get("/api/users/new", (req,res) =>{
    console.log("New User Page")
    console.log(`User Data ==========`)
    let user1 = new User();
    res.json({user1})
})

app.get("/api/companies/new", (req,res) =>{
    console.log("New Company Page")
    let company1 = new Company();
    res.json({company1})
})

app.get("/api/user/company", (req,res) =>{
    console.log("New Company Page")
    let company2 = new Company();
    let user2 = new User();
    res.json({company2,user2})
})

app.listen(port, ()=> console.log(`Running on Port ${port}`))