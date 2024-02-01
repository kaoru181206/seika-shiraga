'use client'

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
    error,
}: {
    error: Error & { digest?: string };
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main>
            <div 
                className="
                    flex 
                    h-full 
                    flex-col 
                    items-center 
                    justify-center 
                    text-xs 
                    md:text-sm 
                    text-[#121212] 
                    text-center 
                    pt-28 
                    px-9
                "
            >
                <div>
                    <p>
                        大変申し訳ありません。<br /><br />
                        ご指定のページ（またはファイル）が見つかりませんでした。<br />
                        URLのご指定に誤りがあるか、更新等に伴い削除されてしまった可能性があります。<br />
                        お手数とは思いますが、下記リンクからサイトへ移動してください。<br /><br />

                        <Link className="hover:text-gray-400" href="/">
                            ・SEIKA SHIRAGA WEB
                        </Link>
                        <br />
                        <br />
                        ※ブックマーク等をご登録されている方はお手数ですがＵＲＬの変更をお願いいたします。
                    </p>
                </div>
                <div 
                    className="
                        flex 
                        items-center 
                        justify-center 
                        hover:border-gray-400 
                        hover:text-gray-400 
                        w-64 
                        h-11 
                        mt-6 
                        border 
                        border-[#121212]
                    ">
                    <Link href="/">
                        トップページへ
                    </Link>
                </div>
            </div>
        </main>
    );
}