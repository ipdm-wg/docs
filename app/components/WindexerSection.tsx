import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WindexerSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted retro-container">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl retro-text">
            Windexer: IPDM in Action
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A novel indexing solution for Solana that leverages ZK compression, off-chain storage, and the IPDM to achieve unprecedented speed and efficiency in data indexing and retrieval. This system addresses Solana&apos;s state growth challenges while maintaining security, composability, and near-instantaneous indexing of new accounts.
          </p>
          <ul className="list-disc text-left space-y-2 mt-4">
            <li>Real-time indexing with support for custom WASM-based indexing logic</li>
            <li>Multi-tiered storage (Redis, ScyllaDB) for optimized data access</li>
            <li>Advanced querying via GraphQL and REST APIs for flexible data retrieval</li>
            <li>High-performance gRPC interface with fallback to HTTP/JSON-RPC</li>
            <li>Scalable architecture supporting parallel processing and sharding</li>
          </ul>
          <Button className="retro-button mt-6">
            <Link href="https://Windexeros.xyz/" target="_blank" rel="noopener noreferrer">
              Explore Windexer
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}