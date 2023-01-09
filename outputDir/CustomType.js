"use strict";
const userValidety = (user) => {
    if (user.age > 18) {
        console.log("he is adult");
    }
    else {
        console.log("He is tenneger");
    }
};
userValidety({ name: "asdf", id: 234, age: 50 });
