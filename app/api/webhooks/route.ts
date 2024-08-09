// import connectToDB from "@/app/lib/connectToDB";
// import { EmailAddress } from "@clerk/nextjs/server";

// export async function POST(req:Request) {
//   const newUser = {
//     clerkUserId = id,
//     emailAddress = email_addresses[0].email_address,
//   };

//   console.log(newUser);

//   try{
//     await connectToDB();
//     await User.create(newUser);
//     console.log("user created");
//   }catch(error){}
// }
// console.log('Webbook with an ID of ${id} and type of ${eventType}');
// console.log("Webhook body: ",body);

// return new Response("",{status:200});
// }


import { Webhook } from 'svix';
import { headers } from 'next/headers';
import connectToDB from '@/app/lib/connectToDB'; // Ensure this path is correct
import User from '@/app/Models/UserSchema'; // Adjust import to your actual User model path
import { WebhookEvent } from '@clerk/nextjs/server';

// Ensure you have your environment variable defined
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

export async function POST(req: Request) {
  if (!WEBHOOK_SECRET) {
    return new Response('WEBHOOK_SECRET is not defined', { status: 500 });
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If any headers are missing, return an error
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', { status: 400 });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', { status: 400 });
  }

  // Do something with the payload
  const { id } = evt.data;
  const eventType = evt.type;
  if (eventType === 'user.created') {
    const {id,email_addresses} = evt.data;

    const newUser = {
      clerkUserId: id,
      emailAddress: email_addresses[0].email_address,
  };
  console.log(newUser);
  // export async function POST(req:Request) {
  //   const newUser = {
  //     clerkUserId: id,
  //     emailAddress: email_addresses[0].email_address,
  //   };
  try{
    await connectToDB();
    await User.create(newUser);
    console.log("user created");
  }catch(error){}
}
  

  //   try {
  //     await connectToDB();
  //     await User.create(newUser);
  //     console.log('User created successfully');
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //     return new Response('Error occurred while creating user', { status: 500 });
  //   }
  // } else {
  //   console.log('No action taken for event type:', eventType);
  // }

  console.log(`Webhook with ID: ${id}, Event Type: ${eventType}`);
  console.log('Webhook body:', body);

  return new Response('', { status: 200 });
}
