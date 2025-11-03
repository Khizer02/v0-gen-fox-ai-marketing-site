export default function Testimonials() {
  const testimonials = [
    {
      quote: "GenFox didn't just automate our processes—it transformed how we think about operations.",
      author: "Sarah Chen",
      role: "VP of Human Resources",
      company: "Fortune 500 Tech Company",
    },
    {
      quote: "The build-to-own model means we control our destiny. No vendor lock-in, just pure value.",
      author: "David Thompson",
      role: "Chief Operations Officer",
      company: "Global Manufacturing Corp",
    },
    {
      quote: "ROI in 8 weeks. That's not just impressive—it's transformational for our business.",
      author: "Michael Rodriguez",
      role: "CFO",
      company: "Mid-Market Financial Services",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-primary rounded-full" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
