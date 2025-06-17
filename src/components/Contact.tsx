import React from 'react'

const ContactSection = () => {
    return (
        <section id="contact" className="section-spacing bg-black bg-opacity-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg text-gray-300 mb-8">
                        I'm always interested in new opportunities and collaborations.
                        Let's connect and build something amazing together!
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="card-hover rounded-2xl p-6">
                            <div className="text-3xl mb-4">📧</div>
                            <h3 className="font-bold mb-2">Email</h3>
                            <p className="text-gray-300">kriti@example.com</p>
                        </div>
                        <div className="card-hover rounded-2xl p-6">
                            <div className="text-3xl mb-4">💼</div>
                            <h3 className="font-bold mb-2">LinkedIn</h3>
                            <p className="text-gray-300">linkedin.com/in/kriti</p>
                        </div>
                        <div className="card-hover rounded-2xl p-6">
                            <div className="text-3xl mb-4">🐙</div>
                            <h3 className="font-bold mb-2">GitHub</h3>
                            <p className="text-gray-300">github.com/kriti</p>
                        </div>
                    </div>
                    <button className="contact-button px-12 py-4 rounded-full text-white font-semibold text-lg">
                        Let's Work Together
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

