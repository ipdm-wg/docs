import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden retro-container">
      <div className="absolute inset-0 opacity-50 z-0">
        <Image
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z4d3N2OXFsc3dkYXE2czFtajFreGRramR0dzJkbHNwYnBxeTN1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IcZhFmufozDCij3p22/giphy.gif"
          alt="IPDM Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none retro-text">
              Interplanetary Data Machine
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Innovating global data management with unprecedented speed and scale. From Earth to Mars and beyond, IPDM is the future of interplanetary information exchange.
            </p>
          </div>
          <div className="space-x-4">
            <a href="#Paper"><Button className="retro-button">Learn More</Button></a>
            <a href="https://airtable.com/apptKwInL7H6t9u7E/paggbPkZyzXOn3NVf/form"><Button variant="outline" className="retro-button">Join Working Group</Button></a>
          </div>
        </div>
      </div>
    </section>
  )
}