"use client";

import api from "../../lib/api-client";

export default async function getUsers() {
  try {
    const res = await api.get("/users/users/");
    return res.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
