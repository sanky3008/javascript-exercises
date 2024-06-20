const findTheOldest = function(people) {
    let sortedArray = people.sort((a,b) => {
        if (!a.yearOfDeath){
            let currentTime = new Date()
            a.yearOfDeath = currentTime.getFullYear();
        }

        if (!b.yearOfDeath){
            let currentTime = new Date()
            b.yearOfDeath = currentTime.getFullYear();
        }

        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;

        if (aAge >= bAge){
            return -1;
        } else if (aAge < bAge){
            return 1;
        }
    });

    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
