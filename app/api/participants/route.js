import { NextResponse } from "next/server";
import supabase from "@/app/config/supabase";

export async function GET() {
  const { data, error } = await supabase.from("participants").select("*");

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  else {
    return NextResponse.json(data);
  }
}
