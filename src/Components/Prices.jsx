import React from "react";

const Prices = () => {
  const priceList = [
    {
      id: 1,
      title: "Basic Plan",
      description: "Perfect for starters",
      price: "$69.99",
      features: [
        {
          fea01: true,
          fea02: true,
          fea03: false,
          fea04: true,
          fea05: true,
          fea06: false,
          fea07: false,
          fea08: true,
          fea09: true,
        },
      ],
    },
    {
      id: 2,
      title: "Standard Plan",
      description: "Great for small businesses",
      price: "$99.99",
      features: [
        {
          fea01: true,
          fea02: true,
          fea03: true,
          fea04: true,
          fea05: false,
          fea06: false,
          fea07: false,
          fea08: false,
          fea09: true,
        },
      ],
    },
    {
      id: 3,
      title: "Premium Plan",
      description: "Ideal for power users",
      price: "$149.99",
      features: [
        {
          fea01: true,
          fea02: true,
          fea03: true,
          fea04: true,
          fea05: true,
          fea06: true,
          fea07: true,
          fea08: false,
          fea09: true,
        },
      ],
    },
  ];

  const featureMap = {
    fea01: "Functional website",
    fea02: "Content upload",
    fea03: "Payment processing",
    fea04: "Opt-in form",
    fea05: "Autoresponder integration",
    fea06: "Speed optimization",
    fea07: "Social media icons",
    fea08: "E-commerce functionality",
    fea09: "Source code",
  };

  return (
    <div className="w-full h-full mx-auto">
      <div className="flex flex-col items-center justify-center h-full gap-4 px-4 mx-auto duration-100 dark:text-gray-200">
        <p className="py-3 text-2xl duration-100 border-b-2 border-gray-800 dark:border-gray-200 sm:my-7">
          Pricing
        </p>
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
          {priceList.map(({ id, title, description, price, features }) => (
            <div
              key={id}
              className="p-6 duration-100 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <h2 className="mb-2 text-xl font-semibold text-gray-800 duration-100 dark:text-white">
                {title}
              </h2>
              <p className="mb-4 text-gray-500 duration-100 dark:text-gray-400">
                {description}
              </p>
              <div className="text-2xl font-bold text-gray-800 duration-100 dark:text-white">
                {price}
              </div>
              <ul className="mt-4">
                {Object.keys(features[0]).map((feaKey, index) => (
                  <li key={index} className="flex items-center">
                    <span
                      className="text-gray-800 duration-100 dark:text-white"
                      style={{
                        marginRight: "0.5rem",
                      }}
                    >
                      {featureMap[feaKey]}
                    </span>
                    <span
                      style={{
                        color: features[0][feaKey] ? "green" : "red",
                        fontSize: "1.2rem",
                      }}
                    >
                      {features[0][feaKey] ? "✓" : "✕"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center">
          <strong>*</strong> Chat with me for customizable feature changes as
          per your requirements.
        </p>
      </div>
    </div>
  );
};

export default Prices;
