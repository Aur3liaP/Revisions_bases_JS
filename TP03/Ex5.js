let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

for (let i = 1; i < array.length; i++ ) {
        if (array[i] > 3) {
            console.log(`Nombres > 3 :${array[i]}`);
        };
};

for (let i = 1; i < array.length; i++ ) {
    if (array[i]%2 === 0) {
        console.log(`Nombres pairs :${array[i]}`);
    };
};


for (let i = 1; i < array.length; i++ ) {
    if (i %2 === 0) {
        console.log(`Index pairs :${array[i]}`);
    };
};


for (let i = 1; i < array.length; i++ ) {
    if (array[i] %2 != 0) {
        console.log(`Nombres impairs :${array[i]}`);
    };
};