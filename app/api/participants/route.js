import { NextResponse } from "next/server";
import supabase from "@/app/config/supabase";

export async function GET() {
  console.log("SUPABASE_SERVICE_ROLE_KEY:", process.env.SUPABASE_SERVICE_ROLE_KEY ? "SET" : "NOT SET");
console.log("NEXT_PUBLIC_SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "SET" : "NOT SET");

  const { data, error } = await supabase.from("participants").select("*");

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  else {
    return NextResponse.json(data);
  }
}
