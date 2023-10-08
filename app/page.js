"use client";
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/app/config/firebase";

export default function Page() {
  const [students, setStudents] = useState([]);

  const [id, setId] = useState("");

  const fetchDocs = async () => {
    try {
      const collectionName = collection(db, "form");
      // const queryRef = query(collectionName, where("email","==","naveed@gmail.com"))
      const docs = await getDocs(collectionName);
      const studentsData = [];
      docs.forEach((doc) => {
        studentsData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setStudents(studentsData);
      console.log("students", studentsData);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <h1>Page 1</h1>
      <h1>Page 2</h1>
    </>
  );
}
