import { app, InvocationContext, Timer } from "@azure/functions";
import axios, {AxiosResponse} from 'axios';
import { Practice } from "../models/response";
const sgMail = require('@sendgrid/mail');


export async function IsOpenForApplication(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
    callSundhedDkPractitionerStatus();
}

app.timer('IsOpenForApplication', {
    schedule: '* * * * *',
    handler: IsOpenForApplication
});

async function callSundhedDkPractitionerStatus() : Promise<void> {
    try {
        const response = await axios
        .get<Practice>(process.env.URLForPractitioner);
        console.log(response);

        if(response.data.AabenForTilgang) {
            console.log('Open for applications sending notifications');
            sendMail("ks@occasio.dk",response.data.Navn + " er åben for tilgang - skift læge på borger.dk",response.data.Navn + " er åben for tilgang!");
        }else{
            console.log('Not open for applications sending notifications');
            sendMail("ks@occasio.dk",response.data.Navn + " er ikke åben for tilgang",response.data.Navn + " er ikke åben for tilgang!");
        }
    } catch (error) {
        console.log(error);
    }
}

async function sendMail(email: string, content: string, subject: string): Promise<void> {

  sgMail.setApiKey(process.env.SENDGRID_KEY);
  const msg = {
    to: email, // Change to your recipient
    from: 'noreply@vito.nu', // Change to your verified sender
    subject: subject,
    text: content,
    //html: content,
  };
  sgMail
    .send(msg)
    .then(() => {
      //console.log(`Email ${content} sent to ${email} successfully.`);
    })
    .catch((error) => {
      console.error(`Email ${content} failed to be sent to ${email}. Error: ${error}`);
    });
}