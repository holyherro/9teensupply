import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className='px-4 text-center flex flex-col justify-center items-center h-[80vh]'>
      <div className="flex flex-col items-center gap-2">
        <h3 className='text-[1.2rem]'>Barang yang kamu tuju tidak ditemukan! 🫣</h3>
        <Link href="/" className="text-blue-700">Kembali ke beranda</Link>
      </div>
    </div>
  )
}
