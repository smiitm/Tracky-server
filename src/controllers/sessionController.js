import express from 'express';
const { Request, Response } = express;
import supabase from "../config/supabaseClient.js";

// log a work session
export const logSession = async (req, res) => {
  const { userId, routineId, startTime, endTime, duration, sessionDate } = req.body;

  try {
    console.log("hit log session")
    const { data, error } = await supabase
      .from("sessions")
      .insert([
        {
          user_id: userId,
          routine_id: routineId,
          start_time: startTime,
          end_time: endTime,
          duration: duration,
          session_date: sessionDate,
        },
      ]);

    if (error) throw error;

    res.status(200).json({ message: "Session logged successfully", session: data });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};
