<<<<<<< HEAD
# **Task Management API (Next.js + MongoDB)**

## **📌 Overview**
This is a **task management web application** built with **Next.js** and **MongoDB**. Users can **add, edit, complete, and delete tasks** using a modern UI.  

---

## **🚀 Features**
✅ **Add tasks with a description**  
✅ **Edit tasks**  
✅ **Mark tasks as complete/incomplete**  
✅ **Delete tasks**  
✅ **REST API with CRUD operations**  

---

## **🛠️ Installation & Setup**

### **1️⃣ Clone the Repository**
git clone https://github.com/your-username/task-manager.git
cd task-manager
2️⃣ Install Dependencies
npm install

3️⃣ Set Up Environment Variables
Create a .env.local file in the root directory and add the following:
MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.mongodb.net/task-manager

4️⃣ Run the Development Server
npm run dev
The application will be running at:
📌 http://localhost:3000

📌 API Endpoints
1️⃣ Get All Tasks
Endpoint: GET /api/tasks

Response Example (200 OK):

[
  {
    "_id": "66123abc456def7890",
    "title": "Complete project",
    "description": "Work on the Next.js task manager",
    "completed": false
  }
]

2️⃣ Create a New Task
Endpoint: POST /api/tasks

Request Body (JSON):

{
  "title": "New Task",
  "description": "This is a new task."
}
Response (201 Created):

{
  "message": "Task added successfully",
  "task": {
    "_id": "66123abc456def7892",
    "title": "New Task",
    "description": "This is a new task.",
    "completed": false
  }
}

3️⃣ Update a Task
Endpoint: PUT /api/tasks

Request Body (JSON):

{
  "id": "66123abc456def7890",
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true
}
Response (200 OK):

{
  "message": "Task updated successfully"
}

4️⃣ Delete a Task
Endpoint: DELETE /api/tasks

Request Body (JSON):

{
  "id": "66123abc456def7890"
}
Response (200 OK):

{
  "message": "Task deleted successfully"
}
🛠️ Testing the API
You can test the API using Postman, cURL, or Thunder Client.

📌 Using cURL
Get all tasks:

curl -X GET http://localhost:3000/api/tasks

Create a new task:

curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"title": "New Task", "description": "This is a new task."}'
Update a task:
curl -X PUT http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"id": "66123abc456def7890", "title": "Updated Task", "description": "Updated description", "completed": true}'
Delete a task:
curl -X DELETE http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"id": "66123abc456def7890"}'
🖼️ UI Screenshots
Task Manager Home
![image](https://github.com/user-attachments/assets/7e8c4ad5-7f05-499d-b114-9a3da0e2ad9b)

Adding a Task
![image](https://github.com/user-attachments/assets/1a230103-b9dc-4b9e-ae17-64ba0e5a466c)

Editing a Task
![image](https://github.com/user-attachments/assets/f384fd5d-67e6-4a96-a8ee-80b998d01e87)

Completing a Task
![image](https://github.com/user-attachments/assets/b724abe3-06c0-4b5b-9038-7f29c7d1e532)


📜 License
This project is licensed under the MIT License.

=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 6e7f8b6 (Initial commit)
