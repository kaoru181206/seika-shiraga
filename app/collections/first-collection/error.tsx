'use client'

import Link from 'next/link';
import { useContext, useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main>
            <div className="flex h-full flex-col items-center justify-center text-[#121212] text-center pt-28">
                <div>
                    <p>
                        大変申し訳ありません。<br /><br />
                        ご指定のページ（またはファイル）が見つかりませんでした。<br />
                        URLのご指定に誤りがあるか、更新等に伴い削除されてしまった可能性があります。<br />
                        お手数とは思いますが、下記リンクからサイトへ移動してください。<br /><br />

                        <Link className="" href="/">
                            SEIKA SHIRAGA WEB
                        </Link>
                        <br />
                        <br />
                        ※ブックマーク等をご登録されている方はお手数ですがＵＲＬの変更をお願いいたします。
                    </p>
                </div>
                <div className="mt-6 border border-[#121212]">
                    <Link className="my-3" href="/">
                        トップページへ
                    </Link>
                </div>

                {/* <button className="mt-4 border border-[#121212]" onClick={() => reset()}>
                    再実行
                </button> */}
            </div>

        </main>
    );
}