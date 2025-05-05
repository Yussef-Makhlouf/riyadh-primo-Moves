import { Truck, Home, Package } from 'lucide-react'

interface ServiceIconProps {
  iconType: 'Home' | 'Package' | 'Truck'
}

export default function ServiceIcon({ iconType }: ServiceIconProps) {
  const icons = {
    Home: <Home className="h-8 w-8 text-purple-600" />,
    Package: <Package className="h-8 w-8 text-purple-600" />,
    Truck: <Truck className="h-8 w-8 text-purple-600" />
  };

  return icons[iconType];
}
