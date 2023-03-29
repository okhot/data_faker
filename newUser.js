const { faker } = require('@faker-js/faker')

function newUser(count) {

    let users = []

    for (let i = 0; i < count; i++) {

        let firsName = faker.name.firstName()
        let lasName = faker.name.lastName()
        users.push({
            firsName: firsName,
            lasName: lasName,
            email: faker.internet.email(firsName),
            phone: faker.phone.phoneNumber(),
            avatar: faker.image.avatar(),
            jobTitle: faker.name.jobTitle(),
            company: faker.company.companyName(),
            country: faker.address.country()
        }
        )
    }
    return users
}

module.exports = {newUser}

