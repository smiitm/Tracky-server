import express from 'express';
const { Request, Response } = express;
import supabase from "../config/supabaseClient.js";

// add a new routine
export const newRoutine = async (req, res) => {
  const { userId, Name } = req.body;

  try {
    console.log("hit new routine")
    const { data, error } = await supabase
      .from("routines")
      .insert([
        {
          user_id: userId,
          name: Name,
          total_time: 0,
          num_sessions: 0,
          max_duration: 0,
        },
      ]);

    if (error) throw error;

    res.status(200).json({ message: "Routine added successfully", session: data });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};
