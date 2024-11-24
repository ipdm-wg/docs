import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Globe, Zap, Shield, Cog, Layers } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 retro-container">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 retro-text">
          Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="retro-card">
            <CardHeader>
              <Zap className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="retro-text">Lightspeed Data Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experience blazing-fast data transfer speeds that push the boundaries of what&apos;s possible. IPDM&apos;s innovative routing algorithms and optimized network protocols ensure data reaches its destination at unprecedented velocities.</p>
              <ul className="list-disc list-inside mt-2">
                <li>Advanced routing algorithms</li>
                <li>Optimized network protocols</li>
                <li>Parallel data transmission</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="retro-card">
            <CardHeader>
              <Globe className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="retro-text">Global Decentralized Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p>IPDM is built to scale across the globe, creating a robust and resilient decentralized network. This architecture ensures high availability, fault tolerance, and resistance to censorship.</p>
              <ul className="list-disc list-inside mt-2">
                <li>Seamless global node discovery</li>
                <li>Adaptive peer selection</li>
                <li>Distributed load balancing</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="retro-card">
            <CardHeader>
              <Database className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="retro-text">Lossless Data Compression</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Maximize storage efficiency without compromising data integrity. IPDM&apos;s advanced compression techniques significantly reduce data size while ensuring perfect reconstruction of the original information.</p>
              <ul className="list-disc list-inside mt-2">
                <li>Adaptive compression selection</li>
                <li>Context-aware encoding</li>
                <li>Efficient decompression algorithms</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="retro-card">
            <CardHeader>
              <Shield className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="retro-text">Robust Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Protect your data with state-of-the-art security measures. IPDM implements multiple layers of encryption, access controls, and integrity checks to ensure your information remains confidential and tamper-proof.</p>
              <ul className="list-disc list-inside mt-2">
                <li>End-to-end encryption</li>
                <li>Decentralized access control</li>
                <li>Cryptographic data verification</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="retro-card">
            <CardHeader>
              <Cog className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="retro-text">Adaptive Performance Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experience peak performance in any network condition. IPDM continuously adapts its behavior based on real-time metrics, ensuring optimal operation across varying environments and workloads.</p>
              <ul className="list-disc list-inside mt-2">
                <li>Dynamic resource allocation</li>
                <li>Predictive performance tuning</li>
                <li>Automatic bottleneck detection</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="retro-card">
            <CardHeader>
              <Layers className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="retro-text">Seamless Interoperability</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integrate IPDM effortlessly with existing systems and emerging technologies. Our protocol is designed to work harmoniously with various platforms, ensuring smooth data flow across different ecosystems.</p>
              <ul className="list-disc list-inside mt-2">
                <li>Blockchain compatibility</li>
                <li>API-driven integration</li>
                <li>Cross-platform support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}