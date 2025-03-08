import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export async function PUT() {
    try {
      const { error } = await supabase
        .from('transactions')
        .update({ suspicious: false })
        .eq('suspicious', true);
      
      if (error) throw error;
      
      return new NextResponse('Updated all suspicious transactions to false', { status: 200 });
    } catch (error:any) {
      return new NextResponse(`Error updating transactions: ${error.message}`, { status: 500 });
    }
}
export async function POST(req:NextRequest) {
  try {
    const body = await req.json();
    const { id, sent_at, suspicious, location, receiver, amount } = body;
    
    const { error } = await supabase
      .from('transactions')
      .insert([{ id, sent_at, suspicious, location, receiver, amount }]);
    
    if (error) throw error;
    
    return new NextResponse('Transaction added successfully', { status: 201 });
  } catch (error:any) {
    return new NextResponse(`Error adding transaction: ${error.message}`, { status: 500 });
  }
}
