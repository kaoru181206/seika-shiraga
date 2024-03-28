import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import Login from "../components/Login";
import type { Database } from "@/lib/database.types";

export default async function Admin() {
    // supabase client 作成
    const supabase = createServerComponentClient<Database>({
        cookies,
    })

    // sessionの取得
    const {
        data: { session },
    } = await supabase.auth.getSession();

    // 認証している場合、リダイレクト
    if (session) {
        redirect('/')
    }

    return <Login />
}