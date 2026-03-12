import React from 'react';

const stats = [
  { title: 'Happy Customers', value: '14K+' },
  { title: 'Product Sold', value: '21K+' },
  { title: 'Customer Ratings', value: '4.7' },
  { title: 'Years of Experience', value: '15+' },
];

const Stats = () => (
  <section className="py-16 bg-amber-400 from-brand to-brand-dark text-black">
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((s, idx) => (
        <div key={idx}>
          <div className="text-2xl font-bold">{s.value}</div>
          <div className="mt-2">{s.title}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
