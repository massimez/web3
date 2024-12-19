import React from "react";
import { ReferenceLink } from "../References/ReferenceLink";

export function Web3Section() {
  return (
    <section id="web3" className="mb-24">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Web 3.0</h2>
      <div className="prose prose-lg max-w-none">
        <img
          src="https://insidebitcoins.com/wp-content/uploads/2023/05/DPBTHTJEAZBK7AZEYHPWQS4JME-1-scaled.jpg"
          alt="Defi"
          className="rounded-lg w-[400px]  shadow-lg mb-8 mx-auto"
        />
        <p className="text-gray-700 mb-8 leading-relaxed">
          Web 3.0 represents the next evolution of the Internet, characterized
          by decentralization, artificial intelligence, and the semantic web.
          This new paradigm promises to give users greater control over their
          data and digital interactions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Decentralization and blockchain technology</li>
              <li>Semantic web capabilities</li>
              <li>AI and machine learning integration</li>
              <li>Enhanced privacy and security</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Benefits</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>User data ownership and control</li>
              <li>Improved interoperability</li>
              <li>Enhanced security through decentralization</li>
              <li>Personalized user experiences</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h4 className="font-semibold mb-2">Expert Analysis:</h4>
          <div className="space-y-2">
            <ReferenceLink
              href="https://maticz.com/web3-in-banking"
              title="Web3 in Banking: Applications and Benefits"
              type="expert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
