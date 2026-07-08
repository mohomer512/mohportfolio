import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return NextResponse.json(
      { success: false, message: "Contact storage is not configured." },
      { status: 500 }
    );
  }

  const body = (await req.json()) as ContactPayload;
  const { name, email, subject, message } = body;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("MyPro");
    const collection = db.collection("contacts");

    await collection.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: "Message saved." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Error saving message." },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
