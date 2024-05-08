
async function fetchData() {
    try {
        const shom = await axios.get('https://jsonplaceholder.typicode.com/users');
        const shax = shom.data;

        for (let i = 0; i < shax.length; i++) {
            const user = shax[i];
            console.log(`User ${i + 1}:`);
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log(`Address: ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`);
            console.log(`Phone: ${user.phone}`);
            console.log('------------');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function postData() {
    const name = 'SA';
    const email = 's.anvarov@newuu.uz';

    try {
        const shom1 = await axios.post('https://jsonplaceholder.typicode.com/users', {
            name: name,
            email: email
        });

        console.log('shom:', shom1.data);
    } catch (error) {
        console.error('Error posting data:', error);
    }
}


fetchData();
postData();