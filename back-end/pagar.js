import { MercadoPagoConfig, Payment } from 'mercadopago';
import dotenv from "dotenv";
dotenv.config();    
const client = new MercadoPagoConfig
    ({
        accessToken:process.env.accessToken,
        options: {
            timeout: 5000,
           
        }
    });

const payment=new Payment(client);

const body={
    transaction_amount:22.14,
    description:'Pix teste',
    payment_method_id:'pix',
    payer:{
        email:'joaovitorsantozznet@gmail.com'
    },
};

payment.create({body}).then(console.log).catch(console.log);