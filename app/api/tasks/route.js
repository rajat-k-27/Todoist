import connectDB from "@/lib/mongodb.js";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const tasks = await Task.find({});
  return NextResponse.json(tasks);
}

export async function POST(req) {
  await connectDB();
  const { title, description } = await req.json();
  const task = await Task.create({ title, description });
  return NextResponse.json(task);
}

export async function PUT(req) {
  await connectDB();
  const { id, title, description, completed } = await req.json();
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title, description, completed },
    { new: true }
  );
  return NextResponse.json(updatedTask);
}

export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Task deleted" });
}
