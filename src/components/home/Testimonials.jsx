// src/components/home/Testimonials.jsx
import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'YouTube Creator',
      content: 'EditFlow transformed my content completely. The quality and attention to detail is unmatched!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      content: 'Best decision we made for our video marketing. Professional, fast, and creative.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Creator',
      content: 'Incredible work ethic and amazing results. Highly recommended for any video project!',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      name: 'David Kim',
      role: 'Film Director',
      content: 'Top-notch editing that elevated our production value significantly.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/4.jpg'
    }
  ]

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-slate-200 backdrop-blur-sm rounded-2xl p-6 hover:border-teal-200 transition-all shadow-lg">
                <FaQuoteLeft className="text-teal-600 text-3xl mb-4 opacity-60" />
                <p className="text-slate-700 mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
