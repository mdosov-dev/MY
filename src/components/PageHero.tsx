interface PageHeroProps {
  title: string
  subtitle?: string
  image: string
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[42vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(33,73,74,0.72), rgba(33,73,74,0.85)), url('${image}')`,
        }}
      />
      <div className="relative container-page text-center text-sand-50 px-4 pt-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-4 animate-fade-up">{title}</h1>
        {subtitle && (
          <p className="text-sand-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
