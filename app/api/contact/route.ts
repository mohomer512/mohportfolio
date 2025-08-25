import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // ضع الرابط هنا أو في env
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // اتصال مع MongoDB
    await client.connect();
    const db = client.db("MyPro"); // غير الاسم حسب اختيارك
    const collection = db.collection("contacts");

    // إدخال البيانات
    await collection.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: "Message saved!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Error saving message" }, { status: 500 });
  } finally {
    await client.close();
  }
}