import { BikeIcon, Briefcase, MicrochipIcon, Smartphone } from "lucide-react";
import { GiFullMotorcycleHelmet, GiRunningShoe } from "react-icons/gi";

export const menu = [
  {
    label: 'Handphone',
    href: '/handphone',
  },
  {
    label: 'Motor Bekas',
    href: '/motor-bekas',
  },
];

export const menu_kategori = [
  {
    label: 'Sepatu',
    href: '/sepatu'
  },
  {
    label: 'Spare Part Motor',
    href: '/spare-part-motor',
  },
  {
    label: 'Aksesoris',
    href: '/aksesoris'
  },
  {
    label: 'Helm',
    href: '/helm'
  }
]

export const categories = [
  {
    label: 'Motor Bekas',
    href: '/motor-bekas',
    icon: <BikeIcon size={36} />
  },
  {
    label: 'Spare Part Motor',
    href: '/spare-part-motor',
    icon: <MicrochipIcon size={36} />
  },
  {
    label: 'Aksesoris',
    href: '/aksesoris',
    icon: <Briefcase size={36} />
  },
  {
    label: 'Handphone',
    href: '/handphone',
    icon: <Smartphone size={36} />
  },
  {
    label: 'Helm',
    href: '/helm',
    icon: <GiFullMotorcycleHelmet size={36} />
  },
  {
    label: 'Sepatu',
    href: '/sepatu',
    icon: <GiRunningShoe size={36} />
  }
]

export const services = [
  {
    icon: <BikeIcon size={36} />,
    title: 'Motor Bekas',
    description: 'Kamu bisa menemukan motor bekas yang kamu inginkan!'
  },
  {
    icon: <Smartphone size={36} />,
    title: 'Handphone',
    description: 'Handphone adalah kebutuhan yang sangat penting! Mulai explore mencari handphone sekarang!'
  },
  {
    icon: <GiRunningShoe size={36} />,
    title: 'Sepatu',
    description: 'Mulai dari sepatu casual dan sport semuanya ada disini!'
  },
  {
    icon: <GiFullMotorcycleHelmet size={36} />,
    title: 'Helm',
    description: 'Keamanan kepala kamu menjadi nomor satu pada saat riding! Mulai explore mencari helm sekarang!'
  }
]