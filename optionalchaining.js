function getUserInfo(user) {
    const {
        id,
        profile: {
            name,
            address: {
                city,
                zipcode 
            } = {}
        } = {}
    } = user;

    const userCity = city ?? "Information not available";
    const userZipcode = zipcode ?? "Information not available";

    return `User ${name} (ID: ${id}) lives in ${userCity} (ZIP: ${userZipcode})`;
}

const user1 = {id: 123, profile: {name: "John Doe", address: {city: "Los Angeles", zipcode: "90001"}}};
console.log(getUserInfo(user1));

const user2 = {id: 123, profile: {name: "John Doe"}};
console.log(getUserInfo(user2));
