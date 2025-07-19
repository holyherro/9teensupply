    "use client";

import Link from "next/link";
    import { useEffect } from "react";

    export default function Error({ error, reset }) {
      useEffect(() => {
        console.error(error);
      }, [error]);

      return (
        <div className="flex flex-col justify-center items-center h-[50vh] text-[1.3rem]">
          <h2>Terjadi Kesalahan! 😢</h2>
          <Link href='/' className="text-blue-600">Kembali ke beranda</Link>
        </div>
      );
    }