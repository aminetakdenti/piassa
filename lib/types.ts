export type User = {
    id: number;
    profile: {
        fname: string;
        lname: string;
        email: string;
        password: string;
        phoneNumber01: string;
        phoneNumber02?: string;
    },
    address: {
        wilaya: string;
        commune: string;
        address: string;
    },
    store: {
        storeName: string;
        specialty: string;
        startDate: string;
        storeId: string;
        dueDate: string;
        refrence: string;
    },
    accountStatus: 'ON' | 'OFF';
    lastUpdate: string;
};