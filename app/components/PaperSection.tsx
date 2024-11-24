import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaperSection() {
  return (
    <section id="Paper" className="w-full py-12 md:py-24 lg:py-32 retro-container">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 retro-text">
          IPDM Detailed Specification
        </h2>
        <Tabs defaultValue="introduction" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="introduction" className="retro-button">Intro</TabsTrigger>
            <TabsTrigger value="architecture" className="retro-button">Architecture</TabsTrigger>
            <TabsTrigger value="technologies" className="retro-button">Technologies</TabsTrigger>
            <TabsTrigger value="use-cases" className="retro-button">Use Cases</TabsTrigger>
            <TabsTrigger value="future" className="retro-button">Future</TabsTrigger>
          </TabsList>
          <TabsContent value="introduction">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="retro-text">Introduction to IPDM</CardTitle>
                <CardDescription>Core concept and design principles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The Interplanetary Data Machine (IPDM) is a distributed protocol designed to achieve unprecedented speeds in data retrieval and processing across the globe. IPDM aims to minimize latency and maximize throughput across planetary-scale networks, providing a robust foundation for decentralized applications.
                </p>
                <h4 className="font-semibold mb-2 retro-text">Key Design Principles:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Speed First: Every aspect of the system is optimized for speed, from data encoding to network routing.</li>
                  <li>Global Scale: Designed to operate efficiently across global networks, handling millions of nodes and exabytes of data.</li>
                  <li>Adaptivity: Dynamically adjusts behavior based on network conditions, data characteristics, and usage patterns.</li>
                  <li>Modularity: Components are designed to be modular, allowing for easy upgrades and customizations.</li>
                  <li>Resilience: Fault-tolerant and self-healing, capable of operating in unreliable network conditions.</li>
                  <li>Efficiency: Resource usage is optimized at every level, from memory management to network utilization.</li>
                  <li>Interoperability: Designed to integrate seamlessly with existing systems and protocols.</li>
                  <li>Security and Privacy: Strong security measures and privacy-preserving techniques are built into the core of the protocol.</li>
                  <li>Scalability: Designed to scale horizontally, maintaining performance as the network grows.</li>
                  <li>Simplicity: Despite advanced capabilities, the protocol strives for simplicity in its API and core concepts.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="architecture">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="retro-text">System Architecture</CardTitle>
                <CardDescription>Main layers of IPDM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold retro-text">Network Layer</h4>
                    <p>Built on libp2p with specialized components for Filecoin and IPFS integration. Implements:
                      - Graphsync and Bitswap protocols for efficient data retrieval
                      - Advanced retrieval strategies with timeout management and fallback mechanisms
                      - Provider-aware routing optimization
                    </p>
                  </li>

                  <li>
                    <h4 className="font-semibold retro-text">Data Layer</h4>
                    <p>Implements a sophisticated DAG-based data management system:
                      - Smart data splitting with configurable chunk sizes (64MB-1GB)
                      - Multi-tier storage with warm/cold data separation
                      - ZStandard compression with optimized dictionary encoding
                      - Content-addressed storage using CIDs
                      - Access pattern-aware data organization
                      - Reference locality optimization
                    </p>
                  </li>

                  <li>
                    <h4 className="font-semibold retro-text">Processing Layer</h4>
                    <p>Advanced data processing architecture featuring:
                      - DAG-aware parallel processing engine
                      - Optimized retrieval paths based on access patterns
                      - Concurrent chunk processing with semaphore-based control
                      - Smart caching system for frequently accessed data
                      - Entry point detection and optimization
                      - Reference tracking and relationship mapping
                      - CID-based integrity verification
                    </p>
                  </li>

                  <li>
                    <h4 className="font-semibold retro-text">Optimization Layer</h4>
                    <p>Sophisticated optimization mechanisms including:
                      - Adaptive chunk sizing based on data relationships
                      - Reference locality preservation during splitting
                      - Access pattern analysis and optimization
                      - Smart merging of related data chunks
                      - Entry point-based chunk boundary detection
                      - Concurrent processing optimization
                      - Memory-efficient data handling
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="technologies">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="retro-text">Core Technologies</CardTitle>
                <CardDescription>Key innovations powering IPDM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold retro-text">Advanced Compression</h4>
                    <p>IPDM uses a suite of compression techniques including Zstandard, Bit-packing, and Run-length Encoding. An adaptive compression selection algorithm dynamically chooses the best method based on data characteristics and access patterns.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Distributed Hash Table (DHT)</h4>
                    <p>A modified Kademlia DHT is used for efficient peer discovery and data routing. It features a 256-bit key space using BLAKE3 hashing, iterative routing with parallelized lookups, and proximity-aware routing to minimize latency.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Content-Addressed Storage</h4>
                    <p>Building on IPFS, IPDM implements enhanced content-addressed storage. It uses BLAKE3 for fast Content Identifier (CID) generation, employs a rolling hash algorithm for efficient chunking of large files, and implements chunk-level deduplication.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">WebAssembly Runtime</h4>
                    <p>The processing layer uses a high-performance WebAssembly runtime with Just-In-Time (JIT) compilation for near-native performance. It supports SIMD and multi-threading for parallel processing and implements Ahead-of-Time (AOT) compilation for frequently used functions.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Adaptive Routing</h4>
                    <p>IPDM features an adaptive routing system that optimizes data transfer across the network. It includes real-time latency monitoring, dynamic route selection, multi-path routing for large data transfers, and machine learning-based predictive routing.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="use-cases">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="retro-text">Use Cases and Applications</CardTitle>
                <CardDescription>Potential applications of IPDM</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold retro-text">Blockchain Data Management</h4>
                    <p>IPDM enables high-speed indexing of blockchain data, efficient storage and retrieval of historical transactions, and real-time analytics on blockchain states. It can significantly enhance the performance of blockchain networks, particularly for data-intensive operations.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Content Delivery Networks (CDNs)</h4>
                    <p>With its global data distribution capabilities and minimal latency, IPDM can serve as a next-generation CDN. It allows for dynamic content adaptation based on user location and device, and efficient handling of live streaming data.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Internet of Things (IoT)</h4>
                    <p>IPDM&apos;s architecture is well-suited for IoT applications, enabling real-time processing of sensor data, efficient storage and retrieval of time-series data, and support for edge computing scenarios.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Big Data Analytics</h4>
                    <p>The distributed processing capabilities of IPDM make it ideal for big data analytics. It supports distributed processing of large datasets, real-time data aggregation and analysis, and complex query operations on structured and unstructured data.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Artificial Intelligence and Machine Learning</h4>
                    <p>IPDM can revolutionize AI/ML workflows by providing efficient storage and retrieval of training data, enabling distributed model training across the network, and supporting real-time inference on globally distributed data.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          {/* <TabsContent value="future">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="retro-text">Future Research Directions</CardTitle>
                <CardDescription>Areas for further development and innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold retro-text">AI-Driven Optimizations</h4>
                    <p>Future research will focus on leveraging artificial intelligence to enhance IPDM&apos;s performance. This includes developing machine learning models for predictive data placement and routing, AI-assisted query optimization and execution planning, and automated system tuning based on network conditions and usage patterns.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Advanced Compression Techniques</h4>
                    <p>Continuing research into pushing the boundaries of data compression and encoding. This involves exploring neural network-based compression algorithms, developing domain-specific encoding schemes for common data types, and creating adaptive compression techniques that evolve with data patterns.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Cross-Chain Interoperability</h4>
                    <p>Expanding IPDM&apos;s role as a bridge between different blockchain ecosystems. This includes developing a universal cross-chain communication protocol, researching efficient state synchronization between heterogeneous chains, and exploring chain-agnostic smart contract execution environments.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold retro-text">Privacy-Preserving Computation at Scale</h4>
                    <p>Advancing the field of secure multi-party computation and privacy-preserving analytics. This involves developing scalable implementations of fully homomorphic encryption, creating efficient zero-knowledge proof systems for complex computations, and researching privacy-preserving machine learning techniques compatible with IPDM.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent> */}
        </Tabs>
      </div>
    </section >
  )
}