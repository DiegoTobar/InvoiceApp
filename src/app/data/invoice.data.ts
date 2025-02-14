import { Invoice } from "../models/invoice";

export const invoiceData: any = {
    id: 1,
    name: 'PC components',
    client: {
        name: 'Andres',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: '15'
        }
    },
    company:{
        name: 'New Age',
        fiscalNumber: 123321
    },
    items: [
        {
            id: 1,
            product: 'Cpu Intel 19',
            price: 100,
            quantity: 1
        },
        {
            id: 2,
            product: 'Corsai Keyboard',
            price: 100,
            quantity: 2
        },
        {
            id: 3,
            product: 'Monitor Asus 18',
            price: 100,
            quantity: 3
        }        
    ]
}