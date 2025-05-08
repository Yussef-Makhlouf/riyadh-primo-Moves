import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'خدماتنا | شركة نقل عفش الرياض',
  description: 'نقدم مجموعة متكاملة من خدمات النقل والتخزين والتغليف بأعلى معايير الجودة والاحترافية في الرياض',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
} 