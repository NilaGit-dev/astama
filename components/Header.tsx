"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex items-center justify-between bg-white px-10 py-3">
      <div className="flex items-center gap-3">
        <Image
          src="/images/logo-astama-no-bg.png"
          alt="Logo PT. Astama Ardhi Natha"
          width={56}
          height={56}
        />
        <p className="text-sm font-bold text-black">PT. ASTAMA ARDHI NATHA</p>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/beranda" className="text-black hover:text-[#C49A42]">
            Beranda{" "}
          </Link>

          <Link href="/profil" className="text-black hover:text-[#C49A42]">
            Profil Perusahaan
          </Link>

          <Link href="/visi-misi" className="text-black hover:text-[#C49A42]">
            Visi Misi & Nilai-nilai
          </Link>

          <Link href="/produk" className="text-black hover:text-[#C49A42]">
            Produk & Jasa
          </Link>
        </nav>

        <Link
          href="/kontak"
          className="flex items-center gap-2 rounded-full bg-[#D2AA55] px-6 py-3 text-sm font-medium text-white hover:bg-[#B88F3C]"
        >
          <span>➤</span>
          <span>Hubungi Kami</span>
        </Link>
      </div>

      <div className="flex lg:hidden">
        <Drawer open={open} onOpenChange={setOpen} swipeDirection="right">
          <DrawerTrigger render={<Menu className="cursor-pointer " />} />
          <DrawerContent className="bg-gray-100">
            <DrawerHeader className="bg-white pb-5">
              <DrawerTitle>
                <div className="flex justify-between">
                  <div>
                    <h1>Telusuri Halaman</h1>
                    <p>Pilih tujuan navigasi Anda</p>
                  </div>
                  <DrawerClose
                    render={
                      <Button variant="outline" className="rounded-full">
                        <X />
                      </Button>
                    }
                  />
                </div>
              </DrawerTitle>
            </DrawerHeader>

            <div className="flex flex-col gap-6 pl-5">
              <nav className="flex flex-col gap-5 text-sm">
                <Link
                  href="/beranda"
                  className="text-black hover:text-[#C49A42]"
                >
                  Beranda{" "}
                </Link>

                <Link
                  href="/profil"
                  className="text-black hover:text-[#C49A42]"
                >
                  Profil Perusahaan
                </Link>

                <Link
                  href="/visi-misi"
                  className="text-black hover:text-[#C49A42]"
                >
                  Visi Misi & Nilai-nilai
                </Link>

                <Link
                  href="/produk"
                  className="text-black hover:text-[#C49A42]"
                >
                  Produk & Jasa
                </Link>
              </nav>

              <Link
                href="/kontak"
                className="flex items-center gap-2 rounded-full bg-[#D2AA55] px-6 py-3 text-sm font-medium text-white hover:bg-[#B88F3C]"
              >
                <span>➤</span>
                <span>Hubungi Kami</span>
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
