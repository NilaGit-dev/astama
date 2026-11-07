import { Mail, MapPinned, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-between bg-[#0A223C] text-white p-8">
      <div className="flex items-center flex-2 gap-2">
        <Image
          src="/images/logo-astama-no-bg.png"
          alt="Logo"
          width={60}
          height={60}
        />
        <p className="text-lg font-semibold">PT. ASTAMA ARDHI NATHA</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 flex-2 justify-between">
        <div className="flex flex-col text-sm gap-2">
          <h2 className="text-md font-bold mb-2">Menu</h2>
          <Link href="/home">Beranda</Link>
          <Link href="/about">Profile Perusahaan</Link>
          <Link href="/vision">Visi, Misi, & Nilai-nilai</Link>
          <Link href="/products">Produk & Jasa</Link>
          <Link href="/contact">Kontak</Link>
        </div>

        <div className="flex flex-col text-sm gap-2">
          <h2 className="text-md font-bold mb-2">Kontak Kami</h2>
          <div className="flex items-start gap-2">
            <MapPinned size={18} />
            <p className="max-w-sm">
              Dusun Krajan RT/RW 005/003 <br /> Ds. Bhinor, Kec. Paiton, <br />
              Kab. Probolinggo, Prov. Jawa Timur.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>ptastamaardhinatha@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <PhoneCall size={18} />
            <span>0812-4984-9994</span>
          </div>
        </div>

        <div className="flex flex-col text-sm gap-2">
          <h2 className="text-md font-bold mb-2">Ikuti Kami</h2>
        </div>
      </div>
    </footer>
  );
}
