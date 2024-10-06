import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden retro-container">
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/ipdm-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-50"
        >
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
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