import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export async function GET() {
    try {
        const { data, error } = await supabase
        .from('transactions')
        .select('id, sent_at, suspicious, location, receiver, amount')
        .eq('suspicious', true);
        
        if (error) throw error;
        
        const transactions = data.map(row => 
        `ID: ${row.id}, Sent At: ${row.sent_at}, Suspicious: ${row.suspicious}, Location: ${row.location}, Receiver: ${row.receiver}, Amount: ${row.amount}`
        ).join('\n');
        
        return new NextResponse(transactions, { status: 200 });
    } catch (error:any) {
        return new NextResponse(`Error fetching transactions: ${error.message}`, { status: 500 });
    }
}
